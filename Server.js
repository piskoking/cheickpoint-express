const express = require('express');
const middleware = require('./middleware');

const app = express();
const PORT = process.env.PORT || 30001;

// Middleware pour vérifier l'heure de la requête
app.use(middleware.checkTime);

// Middleware pour servir les fichiers statiques (CSS)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/views/services.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
