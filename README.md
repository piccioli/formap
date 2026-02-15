# Webapp SICAI – Form di accreditamento punti tappa del Sentiero Italia CAI

Applicazione web per la gestione e l'accreditamento dei punti tappa del Sentiero Italia CAI. Permette di selezionare punti sulla mappa interattiva e di visualizzare le coordinate e le informazioni geografiche tramite Nominatim (OpenStreetMap).

## Descrizione

L'applicazione offre:
- Mappa interattiva basata su Leaflet con tile Webmapp
- Selezione di punti tappa cliccando sulla mappa (zoom ≥ 14)
- Visualizzazione di coordinate, comune, provincia, regione e indirizzo completo tramite geocoding Nominatim

## Requisiti

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (opzionale, consigliato)

## Installazione

### File di configurazione

Il file `config.js` non è versionato. **Prima di avviare l'applicazione** (in locale o con Docker) crea la configurazione a partire dall'esempio:

```bash
cp config.js.example config.js
```

Modifica `config.js` per adattare titolo, centro mappa, livelli di zoom, messaggi, ecc. L'immagine Docker viene costruita con i valori di default di `config.js.example`. Per usare la tua configurazione in produzione puoi montare il tuo `config.js` come volume (es. `-v $(pwd)/config.js:/usr/share/nginx/html/config.js`).

### Opzione 1: Docker Compose (consigliato)

1. Clona o scarica il repository sul server:
   ```bash
   git clone <url-repository> webapp-sicai
   cd webapp-sicai
   ```

2. Crea il file di configurazione (vedi sopra):
   ```bash
   cp config.js.example config.js
   ```

3. Modifica la porta in `docker-compose.yml` se necessario (default: 8080):
   ```yaml
   ports:
     - "80:80"   # per usare la porta 80 standard
   ```

4. Avvia il container:
   ```bash
   docker compose up -d
   ```

5. L'applicazione sarà raggiungibile su `http://<indirizzo-server>:<porta>`

### Opzione 2: Build e run con Docker

1. Clona o scarica il repository sul server.

2. Crea il file di configurazione: `cp config.js.example config.js`

3. Costruisci l'immagine:
   ```bash
   docker build -t webapp-sicai .
   ```

4. Avvia il container:
   ```bash
   docker run -d -p 80:80 --name webapp-sicai --restart unless-stopped webapp-sicai
   ```

### Opzione 3: Dietro reverse proxy (produzione con HTTPS)

Per servire l'app dietro Nginx, Traefik o Caddy (HTTPS, dominio custom):

1. Esegui il container sulla rete interna (es. porta 80 interna)
2. Configura il reverse proxy per inoltrare le richieste al container

Esempio con Caddy:
```caddyfile
mappa.tuodominio.it {
    reverse_proxy localhost:8080
}
```

## Sviluppo locale

1. Crea la configurazione: `cp config.js.example config.js`
2. Avvia i container:

```bash
docker compose up -d
```

L'applicazione sarà disponibile su [http://localhost:8080](http://localhost:8080).

## Configurazione

Le impostazioni (centro mappa, livelli zoom, messaggi, titolo, ecc.) si modificano in `config.js`. Dopo aver modificato il file, ricostruisci l'immagine Docker se usi Docker:

```bash
docker compose up -d --build
```

## Licenza

MIT – vedi file [LICENSE](LICENSE).
