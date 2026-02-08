# Modulo: Impostazioni & Configurazione

Hub centrale per la gestione tecnica, economica e dei dati dell'applicazione.

## 1. Gestione API Key (Multi-Provider)
Permette all'utente di inserire le proprie chiavi per sbloccare funzionalità avanzate.
*   **Google Gemini (Obbligatorio):** Motore principale per tutte le analisi e generazioni.
*   **OpenAI (Opzionale):** Usato nel modulo AEO per simulare risposte ChatGPT reali.
*   **Perplexity (Opzionale):** Usato nel modulo AEO e GEO per recuperare dati live dal web e fonti internazionali.
*   **Sicurezza:** Le chiavi sono salvate **solo** nel `localStorage` del browser. Non vengono mai inviate a server terzi (eccetto i provider stessi).
*   **Verifica:** Pulsante "Verifica" per testare la validità della chiave in tempo reale.

## 2. Configurazione Costi (FinOps)
Sistema per stimare i costi di utilizzo delle API.
*   **Parametri Configurabili:** Costo per 1M Token Input, Costo per 1M Token Output, Costo per Ricerca (Grounding).
*   **Tracking:** Calcolo in tempo reale della spesa totale basata sull'utilizzo della sessione.
*   **Reset:** Possibilità di azzerare il contatore spesa.

## 3. Knowledge Base & Data Management
Gestione della portabilità dei dati.
*   **Export Progetto:** Scarica un file `.json` (o `.geoaudit`) contenente:
    *   Profilo Cliente completo.
    *   Storico di tutte le analisi effettuate.
    *   Impostazioni (escluse le chiavi API per sicurezza, o incluse opzionalmente).
    *   Post pianificati.
*   **Import Progetto:** Carica un file di backup per ripristinare lo stato su un altro dispositivo.
*   **Knowledge Base Editor:** Editor di testo per inserire informazioni non strutturate (note, interviste, PDF convertiti in testo) che verranno iniettate come contesto in ogni prompt.
