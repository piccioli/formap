const CONFIG = {

  // Versione del software
  version: "1.2.0",
  // Data della versione (formato YYYY-MM-DD)
  versionDate: "2025-02-15",
  // Nome dell'app per User-Agent e identificazione esterna
  appName: "WebappSICAI",
  // Licenza del software (es. MIT, Apache-2.0)
  license: "MIT",

  // Se true, mostra in alto a destra il livello di zoom corrente
  debug: false,

  // Titolo dell'applicazione (header e popup informazioni)
  title: "Form di accreditamento per i punti tappa del Sentiero Italia CAI",
  // Descrizione mostrata nel popup informazioni (icona ℹ)
  description: "Applicazione per la gestione e l'accreditamento dei punti tappa del Sentiero Italia CAI. Clicca sulla mappa per visualizzare le coordinate e le informazioni geografiche del punto selezionato tramite Nominatim.",

  // Centro iniziale della mappa [latitudine, longitudine]
  start_center: [43.7769, 11.2561],
  // Livello minimo di zoom (quanto si può allontanare la vista)
  min_zoom: 6,
  // Livello di zoom al caricamento della mappa
  start_zoom: 8,
  // Zoom minimo richiesto per attivare il click sulla mappa (selezione punto tappa)
  click_zoom: 14,
  // Livello massimo di zoom (quanto si può avvicinare la vista)
  max_zoom: 16,

  // Messaggio mostrato al centro della mappa quando lo zoom è inferiore a click_zoom
  zoom_message: "Ingrandisci la mappa usando il pulsante \"+\" per selezionare la posizione del punto tappa",

};
