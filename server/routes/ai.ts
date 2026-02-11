import { Router, Request, Response } from "express";
import { isAuthenticated } from "../replit_integrations/auth";

const router = Router();

interface ScrapedData {
  title: string;
  metaDescription: string;
  headings: string[];
  textContent: string;
  links: string[];
  ogTags: Record<string, string>;
  schemaOrg: string[];
  canonicalUrl: string;
  lang: string;
}

async function scrapeDomain(domain: string): Promise<ScrapedData> {
  const url = domain.startsWith('http') ? domain : `https://${domain}`;
  const result: ScrapedData = {
    title: '', metaDescription: '', headings: [], textContent: '',
    links: [], ogTags: {}, schemaOrg: [], canonicalUrl: '', lang: ''
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; GEOAuditBot/1.0)',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'it-IT,it;q=0.9,en;q=0.8'
      },
      redirect: 'follow'
    });
    clearTimeout(timeout);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) result.title = titleMatch[1].trim();

    const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    if (metaDescMatch) result.metaDescription = metaDescMatch[1].trim();

    const langMatch = html.match(/<html[^>]*lang=["']([^"']*)["']/i);
    if (langMatch) result.lang = langMatch[1];

    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    if (canonicalMatch) result.canonicalUrl = canonicalMatch[1];

    const headingRegex = /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi;
    let hMatch;
    while ((hMatch = headingRegex.exec(html)) !== null && result.headings.length < 30) {
      const clean = hMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      if (clean.length > 2 && clean.length < 200) result.headings.push(clean);
    }

    const ogRegex = /<meta[^>]*property=["'](og:[^"']*)["'][^>]*content=["']([^"']*)["']/gi;
    let ogMatch;
    while ((ogMatch = ogRegex.exec(html)) !== null) {
      result.ogTags[ogMatch[1]] = ogMatch[2];
    }

    const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let sMatch;
    while ((sMatch = schemaRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(sMatch[1]);
        result.schemaOrg.push(JSON.stringify(parsed).substring(0, 500));
      } catch {}
    }

    const linkRegex = /<a[^>]*href=["']([^"'#][^"']*)["']/gi;
    let lMatch;
    const linkSet = new Set<string>();
    while ((lMatch = linkRegex.exec(html)) !== null && linkSet.size < 50) {
      const href = lMatch[1].trim();
      if (href.startsWith('/') || href.startsWith(url)) {
        linkSet.add(href);
      }
    }
    result.links = Array.from(linkSet);

    let bodyHtml = html.replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<header[\s\S]*?<\/header>/gi, '');
    const textParts = bodyHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    result.textContent = textParts.substring(0, 5000);

    if (!result.title && !result.metaDescription && result.headings.length === 0 && result.textContent.length < 100) {
      const internalPages = result.links
        .filter(l => l.startsWith('/'))
        .filter(l => /\/(chi-siamo|about|prodotti|products|servizi|services|contatti|contact)/i.test(l))
        .slice(0, 2);

      for (const path of internalPages) {
        try {
          const pageUrl = `${url.replace(/\/$/, '')}${path}`;
          const pageRes = await fetch(pageUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GEOAuditBot/1.0)', 'Accept': 'text/html' },
            redirect: 'follow',
            signal: AbortSignal.timeout(8000)
          });
          if (pageRes.ok) {
            const pageHtml = await pageRes.text();
            const pageHeadings: string[] = [];
            const phRegex = /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi;
            let phMatch;
            while ((phMatch = phRegex.exec(pageHtml)) !== null && pageHeadings.length < 10) {
              const clean = phMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
              if (clean.length > 2) pageHeadings.push(clean);
            }
            result.headings.push(...pageHeadings);
            const pageBody = pageHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
            const pageText = pageBody.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            result.textContent += '\n\n' + pageText.substring(0, 2000);
          }
        } catch {}
      }
    }

  } catch (e: any) {
    result.textContent = `[SCRAPE_FAILED: ${e.message}]`;
  }

  return result;
}

function isScrapeFailed(scraped: ScrapedData): boolean {
  return scraped.textContent.startsWith('[SCRAPE_FAILED:') && 
    !scraped.title && !scraped.metaDescription && scraped.headings.length === 0;
}

function formatScrapedContext(scraped: ScrapedData): string {
  const parts: string[] = [];
  if (scraped.title) parts.push(`Titolo pagina: "${scraped.title}"`);
  if (scraped.metaDescription) parts.push(`Meta description: "${scraped.metaDescription}"`);
  if (scraped.lang) parts.push(`Lingua: ${scraped.lang}`);
  if (scraped.headings.length > 0) parts.push(`Titoli presenti nel sito (H1-H3):\n${scraped.headings.map(h => `- ${h}`).join('\n')}`);
  if (scraped.ogTags['og:type']) parts.push(`Tipo sito: ${scraped.ogTags['og:type']}`);
  if (scraped.ogTags['og:site_name']) parts.push(`Nome sito: ${scraped.ogTags['og:site_name']}`);
  if (scraped.schemaOrg.length > 0) parts.push(`Dati strutturati (Schema.org): ${scraped.schemaOrg.join('; ')}`);
  if (scraped.links.length > 0) {
    const sampleLinks = scraped.links.slice(0, 20).map(l => `- ${l}`).join('\n');
    parts.push(`Link interni (campione):\n${sampleLinks}`);
  }
  if (scraped.textContent && !scraped.textContent.startsWith('[Impossibile')) {
    parts.push(`Contenuto testuale del sito (primi 3000 caratteri):\n${scraped.textContent.substring(0, 3000)}`);
  }
  return parts.join('\n\n');
}

async function callGemini(apiKey: string, prompt: string, model: string = 'gemini-2.5-flash'): Promise<string> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 8192 },
      }),
    }
  );
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

async function callOpenAI(apiKey: string, prompt: string): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 4096,
      temperature: 0.7,
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.choices?.[0]?.message?.content || "";
}

async function callPerplexity(apiKey: string, prompt: string): Promise<string> {
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 4096,
      temperature: 0.7,
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error?.message || JSON.stringify(data.error));
  return data.choices?.[0]?.message?.content || "";
}

function cleanJsonResponse(text: string): string {
  return text.replace(/```json\n?/g, '').replace(/```\n?/g, '').replace(/^\s*\n/gm, '').trim();
}

router.post("/api/ai/verify-key", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { provider, apiKey } = req.body;
    if (!apiKey) return res.status(400).json({ error: "API key mancante" });

    if (provider === "gemini") {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
      const d = await r.json();
      if (d.error) return res.json({ valid: false, error: d.error.message });
      return res.json({ valid: true, models: d.models?.length || 0 });
    }

    if (provider === "openai") {
      const r = await fetch("https://api.openai.com/v1/models", {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      const d = await r.json();
      if (d.error) return res.json({ valid: false, error: d.error.message });
      return res.json({ valid: true, models: d.data?.length || 0 });
    }

    if (provider === "perplexity") {
      const r = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "sonar",
          messages: [{ role: "user", content: "test" }],
          max_tokens: 5,
        }),
      });
      const d = await r.json();
      if (d.error) return res.json({ valid: false, error: d.error.message || JSON.stringify(d.error) });
      return res.json({ valid: true });
    }

    return res.status(400).json({ error: "Provider non supportato" });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/api/ai/geo-audit", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { domain, geminiKey, clientContext } = req.body;
    if (!geminiKey) return res.status(400).json({ error: "Chiave API Gemini obbligatoria. Configurala in Impostazioni." });
    if (!domain) return res.status(400).json({ error: "Inserisci un dominio web." });

    const scraped = await scrapeDomain(domain);
    if (isScrapeFailed(scraped)) return res.status(502).json({ error: `Impossibile accedere al sito ${domain}. Verifica che il dominio sia corretto e accessibile.` });
    const siteContext = formatScrapedContext(scraped);

    const prompt = `Sei un esperto di GEO (Generative Engine Optimization) e brand analysis.

COMPITO: Analizza il dominio "${domain}" basandoti ESCLUSIVAMENTE sui dati reali estratti dal sito web e dal contesto fornito. Non inventare informazioni: utilizza solo ciò che emerge dal contenuto reale.

=== DATI REALI ESTRATTI DAL SITO ===
${siteContext}

${clientContext ? `=== KNOWLEDGE BASE DEL CLIENTE ===\n${clientContext}` : ''}

=== ISTRUZIONI ===
Basandoti SOLO sui dati reali sopra:
1. La "mission" e "vision" devono derivare dal contenuto reale del sito (testi, meta description, headings)
2. I "valori" devono essere quelli che emergono dal linguaggio e dai temi trattati nel sito
3. Le "keywordPositive" devono essere parole chiave REALMENTE presenti nei contenuti del sito
4. Le "keywordNegative" devono essere termini problematici o assenti che potrebbero danneggiare la percezione AI
5. I "competitors" devono essere aziende reali dello stesso settore identificato dal contenuto del sito
6. Le "personas" devono essere coerenti con il target che emerge dal tipo di contenuti e prodotti/servizi offerti
7. Il "sentimentScore" deve riflettere la qualità della presenza online reale (completezza contenuti, struttura, messaging)

Rispondi SOLO con un JSON valido (senza markdown, senza backtick):
{
  "mission": "mission reale basata sui contenuti del sito",
  "vision": "vision dedotta dai contenuti e dal posizionamento del brand",
  "valori": "valori che emergono dal linguaggio del sito, separati da virgola",
  "sentimentScore": numero da 0 a 100,
  "keywordPositive": ["keyword reale 1 dal sito", "keyword reale 2", "keyword reale 3", "keyword reale 4", "keyword reale 5"],
  "keywordNegative": ["termine problematico 1", "termine problematico 2", "termine problematico 3"],
  "coperturaLocale": "Alta/Media/Bassa con spiegazione basata sui dati del sito",
  "presenzaInternazionale": "Alta/Media/Bassa con spiegazione basata su lingue e mercati identificati",
  "competitors": [{"nome": "competitor reale 1", "settore": "settore specifico"}, {"nome": "competitor reale 2", "settore": "settore specifico"}, {"nome": "competitor reale 3", "settore": "settore specifico"}],
  "personas": [
    {"nome": "Nome Persona 1", "eta": "range età", "ruolo": "Ruolo coerente col target", "descrizione": "descrizione basata sui contenuti del sito"},
    {"nome": "Nome Persona 2", "eta": "range età", "ruolo": "Ruolo coerente col target", "descrizione": "descrizione basata sui contenuti del sito"},
    {"nome": "Nome Persona 3", "eta": "range età", "ruolo": "Ruolo coerente col target", "descrizione": "descrizione basata sui contenuti del sito"}
  ],
  "contentGaps": ["lacuna contenutistica specifica 1", "lacuna 2", "lacuna 3"],
  "technicalFixes": ["ottimizzazione tecnica GEO 1", "fix tecnico 2", "fix tecnico 3", "fix tecnico 4"]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = cleanJsonResponse(result);
    const parsed = JSON.parse(cleaned);
    res.json(parsed);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/api/ai/aeo-audit", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { domain, geminiKey, openaiKey, perplexityKey, clientContext } = req.body;
    if (!geminiKey) return res.status(400).json({ error: "Chiave API Gemini obbligatoria." });
    if (!domain) return res.status(400).json({ error: "Inserisci un dominio web." });

    const scraped = await scrapeDomain(domain);
    if (isScrapeFailed(scraped)) return res.status(502).json({ error: `Impossibile accedere al sito ${domain}. Verifica che il dominio sia corretto e accessibile.` });
    const siteContext = formatScrapedContext(scraped);

    const basePrompt = `Analizza il brand e dominio "${domain}" dal punto di vista AEO (Answer Engine Optimization).

=== DATI REALI DEL SITO ===
${siteContext.substring(0, 2000)}

${clientContext ? `=== CONTESTO CLIENTE ===\n${clientContext.substring(0, 1000)}` : ''}

Sulla base dei dati reali del sito, valuta:
1. Come il brand viene percepito e rappresentato nelle risposte AI
2. La qualità e completezza delle informazioni disponibili per i motori AI
3. La coerenza del messaging tra ciò che il sito comunica e ciò che i motori AI riportano
4. Punti di forza e debolezze nella visibilità AEO

Rispondi in italiano, in modo conciso (max 200 parole). Basa la tua analisi sui contenuti reali del sito.`;

    const results: any = { gemini: '', chatgpt: '', perplexity: '' };
    const promises: Promise<void>[] = [];

    promises.push(
      callGemini(geminiKey, basePrompt).then(r => { results.gemini = r; }).catch(e => { results.gemini = `Errore: ${e.message}`; })
    );

    if (openaiKey) {
      promises.push(
        callOpenAI(openaiKey, basePrompt).then(r => { results.chatgpt = r; }).catch(e => { results.chatgpt = `Errore: ${e.message}`; })
      );
    } else {
      results.chatgpt = "Chiave OpenAI non configurata. Vai in Impostazioni per aggiungerla.";
    }

    if (perplexityKey) {
      promises.push(
        callPerplexity(perplexityKey, basePrompt).then(r => { results.perplexity = r; }).catch(e => { results.perplexity = `Errore: ${e.message}`; })
      );
    } else {
      results.perplexity = "Chiave Perplexity non configurata. Vai in Impostazioni per aggiungerla.";
    }

    await Promise.all(promises);

    const metricPrompt = `Sulla base delle seguenti analisi del brand "${domain}" e dei dati reali del sito, assegna punteggi e genera una roadmap operativa.

=== CONTESTO SITO ===
Titolo: ${scraped.title}
Descrizione: ${scraped.metaDescription}
Settore identificato dai contenuti del sito

=== ANALISI DEI MOTORI AI ===
Gemini: ${results.gemini.substring(0, 600)}
ChatGPT: ${results.chatgpt.substring(0, 600)}  
Perplexity: ${results.perplexity.substring(0, 600)}

Rispondi SOLO con JSON valido (no markdown):
{
  "metriche": {
    "visibilita": {"chatgpt": N, "perplexity": N, "gemini": N},
    "accuratezza": {"chatgpt": N, "perplexity": N, "gemini": N},
    "coerenza": {"chatgpt": N, "perplexity": N, "gemini": N}
  },
  "roadmap": [
    {"quarter": "Q1", "titolo": "Titolo specifico per questo brand", "azioni": "Azioni concrete basate sulle lacune identificate"},
    {"quarter": "Q2", "titolo": "Titolo specifico", "azioni": "Azioni concrete"},
    {"quarter": "Q3", "titolo": "Titolo specifico", "azioni": "Azioni concrete"},
    {"quarter": "Q4", "titolo": "Titolo specifico", "azioni": "Azioni concrete"}
  ],
  "schemaOrg": "Suggerimenti Schema.org specifici basati sui contenuti e il settore del sito analizzato",
  "contentGaps": ["lacuna contenutistica specifica 1", "lacuna contenutistica specifica 2", "lacuna contenutistica specifica 3"],
  "technicalFixes": ["ottimizzazione tecnica AEO specifica 1", "ottimizzazione tecnica AEO 2", "ottimizzazione tecnica AEO 3", "ottimizzazione tecnica AEO 4"],
  "contentSuggestions": [
    {"titolo": "Titolo contenuto suggerito 1", "descrizione": "Descrizione breve del contenuto da creare", "tipo": "LONG-FORM BLOG POST"},
    {"titolo": "Titolo contenuto suggerito 2", "descrizione": "Descrizione breve", "tipo": "FAQ STRUTTURATE"},
    {"titolo": "Titolo contenuto suggerito 3", "descrizione": "Descrizione breve", "tipo": "CASE STUDY"}
  ]
}`;

    const metricResult = await callGemini(geminiKey, metricPrompt);
    const metricCleaned = cleanJsonResponse(metricResult);
    const metrics = JSON.parse(metricCleaned);

    res.json({ engines: results, ...metrics });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/api/ai/prompt-tracker", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { domain, geminiKey, clientContext } = req.body;
    if (!geminiKey) return res.status(400).json({ error: "Chiave API Gemini obbligatoria." });
    if (!domain) return res.status(400).json({ error: "Inserisci un dominio web." });

    const scraped = await scrapeDomain(domain);
    if (isScrapeFailed(scraped)) return res.status(502).json({ error: `Impossibile accedere al sito ${domain}. Verifica che il dominio sia corretto e accessibile.` });
    const siteContext = formatScrapedContext(scraped);

    const prompt = `Sei un esperto di AI Citation Analysis e brand monitoring nei motori AI generativi.

COMPITO: Per il dominio "${domain}", analizza come il brand viene citato e percepito dai motori AI generativi. Genera query di ricerca REALI che un utente potrebbe fare nel settore di questo brand.

=== DATI REALI ESTRATTI DAL SITO ===
${siteContext}

${clientContext ? `=== KNOWLEDGE BASE DEL CLIENTE ===\n${clientContext}` : ''}

=== ISTRUZIONI ===
1. Identifica il settore e i prodotti/servizi REALI del brand dal contenuto del sito
2. Genera 5 query che un utente reale farebbe cercando prodotti/servizi in questo settore specifico
3. Le query devono essere coerenti con le keyword e i temi presenti nel sito
4. Per ogni query, simula se il brand verrebbe citato da un motore AI basandoti sulla qualità e completezza dei contenuti del sito
5. Il citationScore deve riflettere quanto bene i contenuti del sito sono strutturati per essere citati dai motori AI
6. Il sentiment deve basarsi sul tono e sulla qualità dei contenuti reali del sito

Rispondi SOLO con un JSON valido (no markdown):
{
  "citationScore": numero da 0 a 100,
  "sentiment": "Positivo" oppure "Neutro" oppure "Negativo",
  "sentimentDetail": "spiegazione basata sulla qualità reale dei contenuti del sito",
  "queries": [
    {"query": "query reale del settore con keyword dal sito", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "estratto realistico basato sui contenuti del sito"},
    {"query": "query reale 2", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "estratto realistico"},
    {"query": "query reale 3", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "estratto realistico"},
    {"query": "query reale 4", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "estratto realistico"},
    {"query": "query reale 5", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "estratto realistico"}
  ]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = cleanJsonResponse(result);
    res.json(JSON.parse(cleaned));
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/api/ai/ai-overview", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { domain, geminiKey, clientContext } = req.body;
    if (!geminiKey) return res.status(400).json({ error: "Chiave API Gemini obbligatoria." });
    if (!domain) return res.status(400).json({ error: "Inserisci un dominio web." });

    const scraped = await scrapeDomain(domain);
    if (isScrapeFailed(scraped)) return res.status(502).json({ error: `Impossibile accedere al sito ${domain}. Verifica che il dominio sia corretto e accessibile.` });
    const siteContext = formatScrapedContext(scraped);

    const prompt = `Sei un esperto di Google AI Overview / SGE (Search Generative Experience) e SEO strategico.

COMPITO: Analizza il dominio "${domain}" per la sua visibilità nelle risposte AI di Google. Le keyword strategiche devono essere REALI e derivare dal contenuto effettivo del sito.

=== DATI REALI ESTRATTI DAL SITO ===
${siteContext}

${clientContext ? `=== KNOWLEDGE BASE DEL CLIENTE ===\n${clientContext}` : ''}

=== ISTRUZIONI ===
1. Le keyword strategiche devono essere ESTRATTE dai contenuti reali del sito: dai titoli (H1-H3), dalla meta description, dai testi, dai prodotti/servizi menzionati
2. Ogni keyword deve essere una long-tail keyword reale che un utente cercherebbe per trovare i prodotti/servizi offerti da questo sito
3. Il ranking deve essere una stima realistica della posizione nelle SERP per quella keyword specifica
4. La win probability (probabilità di apparire nell'AI Overview) deve basarsi sulla qualità e struttura dei contenuti del sito per quella keyword
5. Il volume deve riflettere il volume di ricerca stimato per il mercato di riferimento
6. I content gaps devono essere lacune SPECIFICHE identificate confrontando ciò che il sito offre con ciò che servirebbe per dominare le AI Overview
7. I fix devono essere azioni concrete e specifiche per questo sito, non consigli generici

Rispondi SOLO con JSON valido (no markdown):
{
  "keywords": [
    {"keyword": "keyword strategica reale dal sito 1", "ranking": numero 1-100, "volume": "Alto/Medio/Basso", "winProbability": numero 0-100},
    {"keyword": "keyword strategica reale 2", "ranking": numero, "volume": "Alto/Medio/Basso", "winProbability": numero 0-100},
    {"keyword": "keyword strategica reale 3", "ranking": numero, "volume": "Alto/Medio/Basso", "winProbability": numero 0-100},
    {"keyword": "keyword strategica reale 4", "ranking": numero, "volume": "Alto/Medio/Basso", "winProbability": numero 0-100},
    {"keyword": "keyword strategica reale 5", "ranking": numero, "volume": "Alto/Medio/Basso", "winProbability": numero 0-100}
  ],
  "contentGaps": ["gap specifico 1 per questo sito", "gap specifico 2", "gap specifico 3", "gap specifico 4"],
  "fixes": ["fix concreto 1 per questo sito", "fix concreto 2", "fix concreto 3", "fix concreto 4", "fix concreto 5"]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = cleanJsonResponse(result);
    res.json(JSON.parse(cleaned));
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/api/ai/vector-check", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { url, keyword, geminiKey, clientContext } = req.body;
    if (!geminiKey) return res.status(400).json({ error: "Chiave API Gemini obbligatoria." });
    if (!url || !keyword) return res.status(400).json({ error: "Inserisci URL e keyword target." });

    const scraped = await scrapeDomain(url);
    if (isScrapeFailed(scraped)) return res.status(502).json({ error: `Impossibile accedere alla pagina ${url}. Verifica che l'URL sia corretto e accessibile.` });
    const siteContext = formatScrapedContext(scraped);

    const prompt = `Sei un esperto di semantic SEO, vector embeddings e NLP applicato al posizionamento nei motori AI.

COMPITO: Analizza la pagina "${url}" rispetto alla keyword target "${keyword}". L'analisi deve basarsi sul contenuto REALE della pagina.

=== CONTENUTO REALE DELLA PAGINA ===
${siteContext}

${clientContext ? `=== KNOWLEDGE BASE DEL CLIENTE ===\n${clientContext}` : ''}

=== ISTRUZIONI ===
1. Analizza il contenuto REALE della pagina e valuta la pertinenza semantica rispetto alla keyword "${keyword}"
2. I "topTerms" devono essere termini REALMENTE PRESENTI nel contenuto della pagina che sono semanticamente correlati alla keyword target
3. I "missingTerms" devono essere termini che DOVREBBERO essere presenti per una copertura semantica completa ma che NON sono nel contenuto attuale
4. Il "relevanceScore" deve riflettere quanto il contenuto reale della pagina è allineato con la keyword target
5. La "semanticDensity" deve indicare quanto densamente i concetti legati alla keyword sono distribuiti nel testo
6. L'"embeddingDistance" deve stimare la distanza vettoriale tra il contenuto della pagina e la keyword target
7. I "consigli" devono essere azioni SPECIFICHE per questa pagina, referenziando contenuti reali da migliorare o aggiungere

Rispondi SOLO con JSON valido (no markdown):
{
  "relevanceScore": numero da 0 a 100,
  "semanticDensity": "Alta/Media/Bassa",
  "embeddingDistance": numero da 0.0 a 1.0 (più basso = più vicino alla keyword target),
  "clusterMatch": "Forte/Moderato/Debole",
  "topTerms": ["termine reale dal contenuto 1", "termine reale 2", "termine reale 3", "termine reale 4", "termine reale 5"],
  "missingTerms": ["termine mancante specifico 1", "termine mancante 2", "termine mancante 3"],
  "consigli": ["consiglio specifico 1 per questa pagina", "consiglio specifico 2", "consiglio specifico 3", "consiglio specifico 4"]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = cleanJsonResponse(result);
    res.json(JSON.parse(cleaned));
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/api/ai/generate-content", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { geminiKey, platform, objective, persona, topic, context, framework, brandVoice, tone } = req.body;
    if (!geminiKey) return res.status(400).json({ error: "Chiave API Gemini obbligatoria." });
    if (!topic) return res.status(400).json({ error: "Inserisci un argomento." });

    const frameworkMap: Record<string, string> = {
      hero: "Viaggio dell'Eroe: presenta il brand/prodotto come guida dell'eroe (il cliente) verso il successo",
      pas: "PAS (Problem-Agitation-Solution): identifica un problema, agita le emozioni, proponi la soluzione",
      bab: "Before-After-Bridge: mostra il prima, il dopo e il ponte (il prodotto/servizio) che li collega",
      cliff: "Cliffhanger: crea suspense e curiosità per mantenere l'attenzione fino alla fine"
    };

    let prompt = `Sei un social media copywriter esperto. Genera un post per ${platform || 'social media'}.

Obiettivo: ${objective || 'engagement'}
Target Persona: ${persona || 'generico'}
Argomento: ${topic}
${context ? `Contesto aggiuntivo: ${context}` : ''}
${framework ? `Framework narrativo: ${frameworkMap[framework] || framework}` : ''}
${tone ? `Tono: ${tone}` : ''}
${brandVoice ? `Brand Voice: Formalità ${brandVoice.formale}%, Amichevolezza ${brandVoice.amichevole}%, Umorismo ${brandVoice.umoristico}%, Tecnicismo ${brandVoice.tecnico}%` : ''}

Regole:
- Scrivi in italiano
- Usa un linguaggio naturale e umano (non sembrare un AI)
- Includi emoji appropriate ma non eccessive
- Aggiungi 3-5 hashtag rilevanti alla fine
- Lunghezza ottimale per ${platform || 'social media'}
- Includi una call-to-action finale

Genera SOLO il testo del post, senza spiegazioni aggiuntive.`;

    const result = await callGemini(geminiKey, prompt);
    res.json({ text: result });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// Visual Studio - Image Generation
router.post('/api/ai/visual-studio', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { prompt, lens, stile, formato, ora, settore, mode, scenarioImages } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Inserisci un prompt visivo' });
    }

    if (mode === 'dopo' && (!scenarioImages || scenarioImages.length === 0)) {
      return res.status(400).json({ error: 'Carica almeno un\'immagine scenario per la modalità Prima/Dopo' });
    }

    if (scenarioImages && scenarioImages.length > 5) {
      return res.status(400).json({ error: 'Massimo 5 immagini scenario consentite' });
    }

    if (scenarioImages) {
      for (const img of scenarioImages) {
        const sizeBytes = (img.length * 3) / 4;
        if (sizeBytes > 10 * 1024 * 1024) {
          return res.status(400).json({ error: 'Ogni immagine scenario deve essere inferiore a 10MB' });
        }
      }
    }

    const OpenAI = (await import('openai')).default;
    const openai = new OpenAI({
      apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
      baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
    });

    const lensDescriptions: Record<string, string> = {
      '23mm': '23mm wide angle lens, immersive perspective, expanded space, dynamic composition',
      '33mm': '33mm lens, natural human-eye perspective, street photography style',
      '55mm': '55mm standard lens, micro-contrast, sharp subject separation, circular bokeh',
      '70mm': '70mm portrait lens, flattering compression, subject isolation, shallow depth of field',
      '90mm': '90mm telephoto, extreme isolation, painterly background, very shallow depth of field',
    };
    
    const oraDescriptions: Record<string, string> = {
      'alba': 'dawn lighting, warm golden tones, low sun angle, soft shadows',
      'mattina': 'morning light, bright natural daylight, clean shadows',
      'mezzogiorno': 'midday sun, harsh overhead light, strong shadows',
      'pomeriggio': 'afternoon light, warm directional light, medium shadows',
      'golden': 'golden hour, warm orange/amber tones, long shadows, magical lighting',
      'blue': 'blue hour, cool blue tones, twilight atmosphere, ambient glow',
      'notte': 'nighttime, artificial lighting, dramatic shadows, urban glow',
      'nuvoloso': 'overcast sky, diffused soft light, no harsh shadows, even illumination',
    };

    const stileDescriptions: Record<string, string> = {
      'human-oriented-realism': 'photorealistic, human-centered composition, authentic feel, natural imperfections',
      'cinematic': 'cinematic composition, dramatic lighting, film-like color grading, widescreen feel',
      'editorial': 'editorial photography, clean composition, magazine-quality, sophisticated styling',
      'minimal': 'minimalist composition, clean negative space, simple elements, understated elegance',
      'dramatic': 'dramatic composition, high contrast, bold shadows, intense atmosphere',
    };

    const settoreContext = settore === 'auto' ? 'automotive context, cars, vehicles, roads, showroom' : 'home/interior context, residential, architecture, living spaces';

    const sizeMap: Record<string, string> = {
      '1:1': '1024x1024',
      '16:9': '1536x1024',
      '9:16': '1024x1536',
      '4:3': '1536x1024',
      '3:4': '1024x1536',
    };
    const size = sizeMap[formato] || '1024x1024';

    const basePrompt = `Professional ${stileDescriptions[stile] || stile} photography. ${lensDescriptions[lens] || lens}. ${oraDescriptions[ora] || ora}. ${settoreContext}. Scene: ${prompt}. Ultra high quality, photorealistic, no text, no watermarks, no AI artifacts.`;

    if (mode === 'prima' || !scenarioImages || scenarioImages.length === 0) {
      const primaPrompt = `${basePrompt} Empty scene without any added objects or products - show only the environment/location/background as described.`;
      
      const response = await openai.images.generate({
        model: 'gpt-image-1',
        prompt: primaPrompt,
        n: 1,
        size: size as any,
      });

      const imageBase64 = (response.data as any)?.[0]?.b64_json || '';
      res.json({ 
        prima: imageBase64,
        mode: 'prima'
      });
    } else {
      const primaPrompt = `${basePrompt} Empty scene without any added objects or products - show only the environment/location/background as described.`;
      
      const primaResponse = await openai.images.generate({
        model: 'gpt-image-1',
        prompt: primaPrompt,
        n: 1,
        size: size as any,
      });

      const primaBase64 = (primaResponse.data as any)?.[0]?.b64_json || '';
      
      const fs = await import('fs');
      const path = await import('path');
      const os = await import('os');
      const { randomUUID } = await import('crypto');
      const { toFile } = await import('openai');
      
      const tmpDir = os.tmpdir();
      const primaPath = path.join(tmpDir, `prima-${randomUUID()}.png`);
      fs.writeFileSync(primaPath, Buffer.from(primaBase64, 'base64'));
      
      const scenarioPaths: string[] = [];
      for (let i = 0; i < scenarioImages.length; i++) {
        const imgPath = path.join(tmpDir, `scenario-${randomUUID()}.png`);
        const imgData = scenarioImages[i].replace(/^data:image\/[a-z]+;base64,/, '');
        fs.writeFileSync(imgPath, Buffer.from(imgData, 'base64'));
        scenarioPaths.push(imgPath);
      }
      
      const allImagePaths = [primaPath, ...scenarioPaths];
      const imageFiles = await Promise.all(
        allImagePaths.map(filePath => 
          toFile(fs.createReadStream(filePath), path.basename(filePath), { type: 'image/png' })
        )
      );

      const editPrompt = `Take the first image as the base scene. Integrate the objects/elements from the other reference images naturally into this exact same scene. ${prompt}. Maintain the same exact perspective, lighting (${oraDescriptions[ora] || ora}), and photographic style (${stileDescriptions[stile] || stile}). The result must look like a real photograph - photorealistic, natural integration, no visible editing artifacts.`;

      const editResponse = await openai.images.edit({
        model: 'gpt-image-1',
        image: imageFiles,
        prompt: editPrompt,
        size: size as any,
      });

      const dopoBase64 = (editResponse.data as any)?.[0]?.b64_json || '';
      
      try {
        fs.unlinkSync(primaPath);
        scenarioPaths.forEach(p => fs.unlinkSync(p));
      } catch (e) {}
      
      res.json({
        prima: primaBase64,
        dopo: dopoBase64,
        mode: 'dopo'
      });
    }
  } catch (e: any) {
    console.error('Visual Studio error:', e);
    res.status(500).json({ error: e.message || 'Errore nella generazione immagine' });
  }
});

export function registerAiRoutes(app: any) {
  app.use(router);
}
