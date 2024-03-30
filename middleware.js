module.exports.checkTime = function(req, res, next) {
    const date = new Date();
    const day = date.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi
    const hour = date.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next(); // Continuer vers la prochaine middleware ou route
    } else {
      res.send('Désolé, cette application est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h).');
    }
  };
  