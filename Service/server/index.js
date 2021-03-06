require('newrelic');
const express = require('express');
const cache = require('express-cache-controller');
const cors = require('cors');

// Controllers
const { getSimilarHomes } = require('./controllers/getSimilarHomes');
const { postNewProperty } = require('./controllers/postNewProperty');
const { patchProperty } = require('./controllers/patchProperty');
const { deleteProperty } = require('./controllers/deleteProperty');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(cache({maxAge: 31536000}));
app.use(express.static('public'));
app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/properties/:id/similarHomes/:rankBy?/:limit?', getSimilarHomes);
app.post('/properties/createProperty', postNewProperty);
app.patch('/properties/:id/similarHomes', patchProperty);
app.delete('/properties/:id/similarHomes', deleteProperty);
