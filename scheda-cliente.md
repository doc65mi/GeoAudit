# Modulo: Scheda Cliente (Project Profile)

Il "cervello" del progetto. Qui vengono definiti i dati che influenzano trasversalmente tutti gli altri moduli (SEO e Social).

## 1. Dati Generali
Informazioni anagrafiche che definiscono il contesto base dei prompt.
*   Nome Cliente / Brand.
*   Descrizione Attività (USP).
*   Target Audience (generico).
*   Sito Web.
*   Social Links (usati per linkare le icone nei report).

## 2. Knowledge Base (RAG Lite)
Sistema di iniezione contesto.
*   **Funzionamento:** Un campo di testo libero di grandi dimensioni.
*   **Import:** Supporto Drag & Drop per file `.txt`, `.md`, `.csv`, `.json`.
*   **Utilizzo:** Il contenuto di questo campo viene appeso (append) a **tutti** i prompt di sistema (GEO Audit, Social Wizard, ecc.), permettendo all'AI di conoscere dettagli specifici non pubblici (es. policy interne, storia del fondatore).

## 3. Brand Voice Engine
Configurazione avanzata dello stile di comunicazione.
*   **Tone Sliders:** 4 slider per definire la personalità (0.0 - 1.0):
    *   Informale <-> Formale
    *   Distaccato <-> Amichevole
    *   Serio <-> Umoristico
    *   Semplice <-> Tecnico
*   **Vocabolario:**
    *   **Preferred:** Lista di parole che l'AI deve privilegiare.
    *   **Forbidden:** Lista di parole ("Anti-AI") che vengono esplicitamente vietate nel System Instruction dei prompt di generazione testo.

## 4. Competitors
Gestione lista competitor.
*   Nome e URL dei competitor.
*   Utilizzato nel GEO Audit per analisi comparative.

## 5. Storico Analisi
Log di tutte le operazioni effettuate.
*   Lista cronologica delle analisi (GEO, AEO, ecc.).
*   Funzione di "Toggle" per decidere quali analisi includere nella **Client Presentation**.
*   Visualizzazione sintetica dei risultati (es. Punteggi, Status).
