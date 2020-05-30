const express = require('express');
const cache = require('express-cache-controller');

// Controllers
const { getSimilarHomes } = require('./controllers/getSimilarHomes');

const app = express();
app.use(express.json());

const PORT = 3004;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(cache({maxAge: 31536000}));
app.use(express.static('public'));
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/properties/:id/similarHomes/:rankBy?/:limit?', getSimilarHomes);
