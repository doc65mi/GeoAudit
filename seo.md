# Modulo: SEO for AI

Il cuore analitico della piattaforma. Questo modulo interroga i modelli AI in tempo reale, utilizzando tecniche di **Grounding** (Google Search) per recuperare dati aggiornati e verificare la presenza del brand.

## Sotto-Sezioni e Funzionalità

### 1. GEO Audit (Generative Engine Optimization)
Analisi profonda dell'identità del brand percepita dagli LLM.
*   **Input:** Dominio Web.
*   **Analisi Svolta:**
    *   **Identità:** Rilevazione automatica di Mission, Vision e Valori percepiti.
    *   **Sentiment Analysis:** Punteggio 0-100 con identificazione keyword positive/negative.
    *   **Rilevanza Locale/Int:** Verifica della comprensione dell'area di servizio e presenza internazionale.
    *   **Competitor:** Identificazione dei rivali diretti secondo l'AI.
    *   **Buyer Personas:** Generazione automatica di 3 profili target basati sull'analisi del sito.
*   **Output:** Report completo con grafici di sentiment e badge di status (OK/WARNING/CRITICAL).

### 2. AEO Audit (Answer Engine Optimization)
Simulazione multi-motore per capire come rispondono le diverse AI.
*   **Input:** Dominio Web.
*   **Analisi Svolta:**
    *   **Simulazione Multi-Engine:** Interroga (o simula se mancano le chiavi) ChatGPT, Perplexity e Gemini sulla reputazione del brand.
    *   **Confronto:** Valuta Visibilità, Accuratezza e Coerenza delle risposte tra i vari engine.
    *   **Piano Strategico:** Genera un piano d'azione trimestrale (Roadmap) e suggerimenti tecnici (Schema.org) per migliorare la rilevabilità.
*   **Output:** Tabella comparativa e Roadmap strategica.

### 3. AI Prompt Tracker
Verifica se il brand è considerato una fonte autorevole.
*   **Input:** Dominio Web.
*   **Analisi Svolta:**
    *   **Reverse Engineering:** Genera query settoriali (es. "Migliori scarpe da corsa") e verifica se il brand viene citato nella risposta generata.
    *   **Citation Score:** Punteggio basato sulla frequenza e qualità delle citazioni.
    *   **Sentiment Citazione:** Analizza se la menzione è positiva o neutra.
*   **Output:** Lista query testate con flag "CITATO/NON CITATO".

### 4. AI Overview Tracker (SGE)
Ottimizzazione per gli snapshot AI di Google (Search Generative Experience).
*   **Input:** Dominio Web.
*   **Analisi Svolta:**
    *   **Analisi Keyword:** Identifica keyword ad alto volume che attivano risposte AI.
    *   **Win Probability:** Calcola la probabilità tecnica di finire nello snapshot AI.
    *   **Content Gap:** Identifica cosa manca nella pagina (es. Tabelle prezzi, Liste puntate).
    *   **Actionable Fixes:** Suggerimenti pratici di modifica content.
*   **Output:** Tabella keyword e lista di interventi correttivi.

### 5. Vector Check (Analisi Semantica)
Analisi tecnica degli embeddings e della rilevanza vettoriale.
*   **Input:** URL specifica + Keyword Target.
*   **Analisi Svolta:**
    *   **Semantic Relevance:** Punteggio di vicinanza semantica tra contenuto e query.
    *   **Analisi Vettoriale:** Simula come un database vettoriale indicizzerebbe il contenuto.
    *   **Consigli Ottimizzazione:** Suggerimenti per migliorare la densità semantica senza keyword stuffing.
*   **Output:** Punteggio di rilevanza e analisi tecnica del testo.
