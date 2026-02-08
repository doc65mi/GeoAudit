# Modulo: Client Presentation

Una vista dedicata alla presentazione dei risultati al cliente finale, progettata per essere "Wow-effect" e professionale.

## 1. Modalità Web (Interactive Landing Page)
Trasforma i dati grezzi in una landing page interattiva navigabile.
*   **Design:** Layout full-width, tipografia curata, animazioni fade-in.
*   **Struttura:**
    *   **Hero Section:** Nome cliente, missione, background animato.
    *   **Sticky Navigation:** Menu di navigazione rapida che segue lo scroll.
    *   **SpyScroll:** Evidenziazione automatica della sezione attiva.
    *   **Report Sections:** Rendering visuale dei report (GEO, AEO, ecc.) selezionati per l'inclusione.
*   **Funzioni:**
    *   **Note Rapide:** Widget flottante per prendere appunti durante la presentazione live col cliente.
    *   **Fullscreen Mode:** Nasconde l'interfaccia dell'app per un'esperienza immersiva.

## 2. Modalità Stampa (PDF Report Generator)
Motore di generazione documentale basato su `html2pdf.js`.
*   **Formato:** A4 Portrait.
*   **Layout:**
    *   **Copertina:** Generata automaticamente con nome brand, data e grafica istituzionale.
    *   **Page Breaks:** Gestione intelligente delle interruzioni di pagina (evita di tagliare grafici o card a metà).
    *   **Clean CSS:** Rimuove elementi UI (pulsanti, menu) e applica stili specifici per la stampa (bianco e nero dove serve, margini corretti).
*   **Selezione Contenuti:** L'utente può scegliere dalla Dashboard quali analisi includere nel PDF tramite il flag `includedInPresentation`.

## 3. Gestione Note
Sistema di annotazione integrato.
*   Le note prese durante la presentazione vengono salvate nel `projectNotes` del profilo cliente e persistono tra le sessioni.
