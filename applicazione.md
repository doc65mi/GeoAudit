# GEO Audit AI - Specifiche di Progetto

## 1. Visione Generale
**GEO Audit AI** è una piattaforma SaaS avanzata progettata per consulenti SEO, agenzie di marketing e brand manager. L'obiettivo principale è analizzare, ottimizzare e monitorare la presenza di un brand all'interno dei motori di ricerca generativi (GEO - Generative Engine Optimization) e dei modelli AI (AEO - Answer Engine Optimization).

A differenza dei tool SEO classici basati su keyword e backlink, GEO Audit AI si concentra su:
- **Percezione del Brand negli LLM:** Come l'AI "vede" e descrive il brand.
- **Entità e Knowledge Graph:** Analisi delle connessioni semantiche.
- **Citazioni e Fonti:** Identificazione delle fonti che alimentano le risposte AI.
- **Generazione Contenuti Human-Oriented:** Creazione di post social e visual che sfuggono ai pattern robotici dell'AI.

## 2. Architettura Tecnica
Il progetto è sviluppato come Single Page Application (SPA) moderna e performante.

*   **Frontend:** React 18 con TypeScript.
*   **Styling:** Tailwind CSS per un design responsive e pulito.
*   **Icons:** Lucide React.
*   **AI Integration:** `@google/genai` (Gemini 2.5/3 Flash & Pro) come motore principale. Supporto per API esterne (OpenAI, Perplexity) tramite chiamate REST.
*   **State Management:** React Hooks (`useState`, `useEffect`) con persistenza locale (`localStorage`) per privacy e portabilità immediata senza backend complesso.
*   **PDF Generation:** `html2pdf.js` per reportistica client-ready.
*   **Routing:** Gestione stato interno (`activeView`) per navigazione fluida senza reload.

## 3. Struttura Modulare
L'applicazione è suddivisa in moduli funzionali distinti:

1.  **Dashboard & Navigazione:** Sidebar responsive e gestione viste.
2.  **Scheda Cliente (Project Profile):** Hub centrale dei dati e della Brand Voice.
3.  **SEO for AI Suite:** 5 strumenti verticali per l'analisi (GEO, AEO, Prompt, Overview, Vector).
4.  **Social Content Wizard:** Generatore di contenuti e immagini con regole anti-AI.
5.  **Client Presentation:** Modalità di visualizzazione web e reportistica PDF.
6.  **Settings & Data:** Gestione chiavi API, costi e import/export JSON.

## 4. Flusso Dati e Privacy
*   **Local-First:** Tutti i dati sensibili (Chiavi API, Profili Clienti, Report) risiedono nel `localStorage` del browser dell'utente.
*   **Nessun Database Remoto (Attuale):** L'architettura è serverless/client-side, garantendo massima privacy e zero costi di infrastruttura fissa.
*   **Portabilità:** Sistema di Export/Import completo in formato `.json` o `.geoaudit` per backup e condivisione tra dispositivi.
