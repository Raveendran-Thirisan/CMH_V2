# Utilisation de l'image officielle Node.js version LTS (Long Term Support) avec Alpine Linux
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste des fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Exposer le port 3000 utilisé par Next.js
EXPOSE 3000

# Utiliser la commande de développement de Next.js
CMD ["npm", "run", "dev"]
