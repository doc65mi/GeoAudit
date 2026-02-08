import { Router, Request, Response } from "express";
import { isAuthenticated } from "../replit_integrations/auth";

const router = Router();

async function callGemini(apiKey: string, prompt: string): Promise<string> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
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

    const prompt = `Sei un esperto di GEO (Generative Engine Optimization) e brand analysis. Analizza il dominio "${domain}" e genera un report completo in formato JSON.

${clientContext ? `Contesto aggiuntivo sul brand: ${clientContext}` : ''}

Rispondi SOLO con un JSON valido (senza markdown, senza backtick) con questa struttura:
{
  "mission": "breve descrizione della mission percepita del brand",
  "vision": "breve descrizione della vision percepita",
  "valori": "valori principali del brand separati da virgola",
  "sentimentScore": numero da 0 a 100,
  "keywordPositive": ["parola1", "parola2", "parola3"],
  "keywordNegative": ["parola1", "parola2"],
  "coperturaLocale": "Alta/Media/Bassa con breve spiegazione",
  "presenzaInternazionale": "Alta/Media/Bassa con breve spiegazione",
  "competitors": [{"nome": "competitor1", "settore": "settore"}, {"nome": "competitor2", "settore": "settore"}, {"nome": "competitor3", "settore": "settore"}],
  "personas": [
    {"nome": "Nome Persona 1", "eta": "25-35", "ruolo": "Ruolo", "descrizione": "breve descrizione"},
    {"nome": "Nome Persona 2", "eta": "35-50", "ruolo": "Ruolo", "descrizione": "breve descrizione"},
    {"nome": "Nome Persona 3", "eta": "20-30", "ruolo": "Ruolo", "descrizione": "breve descrizione"}
  ]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
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

    const basePrompt = `Analizza il brand e dominio "${domain}" dal punto di vista AEO (Answer Engine Optimization). ${clientContext ? `Contesto: ${clientContext}` : ''}
Rispondi descrivendo come il brand viene percepito, la sua visibilità, accuratezza delle informazioni e coerenza. Rispondi in italiano, in modo conciso (max 150 parole).`;

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

    const metricPrompt = `Sulla base delle seguenti analisi del brand "${domain}", assegna un punteggio da 0 a 100 per ciascun motore AI su tre metriche: Visibilità, Accuratezza, Coerenza. Rispondi SOLO con JSON valido (no markdown):
    
Analisi Gemini: ${results.gemini.substring(0, 500)}
Analisi ChatGPT: ${results.chatgpt.substring(0, 500)}  
Analisi Perplexity: ${results.perplexity.substring(0, 500)}

Formato:
{
  "metriche": {
    "visibilita": {"chatgpt": N, "perplexity": N, "gemini": N},
    "accuratezza": {"chatgpt": N, "perplexity": N, "gemini": N},
    "coerenza": {"chatgpt": N, "perplexity": N, "gemini": N}
  },
  "roadmap": [
    {"quarter": "Q1", "titolo": "Titolo", "azioni": "Azioni principali"},
    {"quarter": "Q2", "titolo": "Titolo", "azioni": "Azioni principali"},
    {"quarter": "Q3", "titolo": "Titolo", "azioni": "Azioni principali"},
    {"quarter": "Q4", "titolo": "Titolo", "azioni": "Azioni principali"}
  ],
  "schemaOrg": "Suggerimenti Schema.org specifici per questo brand"
}`;

    const metricResult = await callGemini(geminiKey, metricPrompt);
    const metricCleaned = metricResult.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
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

    const prompt = `Sei un esperto di AI Citation Analysis. Per il dominio "${domain}", genera un report di AI Prompt Tracking.
${clientContext ? `Contesto: ${clientContext}` : ''}

Rispondi SOLO con un JSON valido (no markdown):
{
  "citationScore": numero da 0 a 100,
  "sentiment": "Positivo" oppure "Neutro" oppure "Negativo",
  "sentimentDetail": "spiegazione breve del sentiment",
  "queries": [
    {"query": "query settoriale 1", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "breve estratto"},
    {"query": "query settoriale 2", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "breve estratto"},
    {"query": "query settoriale 3", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "breve estratto"},
    {"query": "query settoriale 4", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "breve estratto"},
    {"query": "query settoriale 5", "citato": true/false, "sentiment": "positivo/neutro/negativo", "excerpt": "breve estratto"}
  ]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
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

    const prompt = `Sei un esperto di Google AI Overview / SGE (Search Generative Experience). Analizza il dominio "${domain}" per la visibilità negli snippet AI di Google.
${clientContext ? `Contesto: ${clientContext}` : ''}

Rispondi SOLO con JSON valido (no markdown):
{
  "keywords": [
    {"keyword": "keyword 1", "volume": "Alto/Medio/Basso", "winProbability": numero 0-100, "status": "Presente/Assente/Parziale"},
    {"keyword": "keyword 2", "volume": "Alto/Medio/Basso", "winProbability": numero 0-100, "status": "Presente/Assente/Parziale"},
    {"keyword": "keyword 3", "volume": "Alto/Medio/Basso", "winProbability": numero 0-100, "status": "Presente/Assente/Parziale"},
    {"keyword": "keyword 4", "volume": "Alto/Medio/Basso", "winProbability": numero 0-100, "status": "Presente/Assente/Parziale"},
    {"keyword": "keyword 5", "volume": "Alto/Medio/Basso", "winProbability": numero 0-100, "status": "Presente/Assente/Parziale"}
  ],
  "contentGaps": ["gap 1 specifico", "gap 2 specifico", "gap 3 specifico"],
  "fixes": ["fix 1 actionable", "fix 2 actionable", "fix 3 actionable", "fix 4 actionable"]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
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

    const prompt = `Sei un esperto di vector embeddings e semantic SEO. Analizza la pagina "${url}" rispetto alla keyword target "${keyword}".
${clientContext ? `Contesto: ${clientContext}` : ''}

Simula un'analisi vettoriale e rispondi SOLO con JSON valido (no markdown):
{
  "relevanceScore": numero da 0 a 100,
  "semanticDensity": "Alta/Media/Bassa",
  "embeddingDistance": numero da 0.0 a 1.0 (più basso = più vicino),
  "clusterMatch": "Forte/Moderato/Debole",
  "topTerms": ["termine1", "termine2", "termine3", "termine4", "termine5"],
  "missingTerms": ["termine_mancante1", "termine_mancante2", "termine_mancante3"],
  "consigli": ["consiglio 1 specifico", "consiglio 2 specifico", "consiglio 3 specifico", "consiglio 4 specifico"]
}`;

    const result = await callGemini(geminiKey, prompt);
    const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
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

export function registerAiRoutes(app: any) {
  app.use(router);
}
