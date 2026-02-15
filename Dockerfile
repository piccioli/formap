# Immagine base nginx Alpine (leggera e production-ready)
FROM nginx:alpine

# Configurazione nginx personalizzata
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia tutti i file della webapp (esclusi da .dockerignore: .git, Dockerfile, ecc.)
COPY index.html config.js LICENSE /usr/share/nginx/html/
COPY DATA/ /usr/share/nginx/html/DATA/
COPY logo.png /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
