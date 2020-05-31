const os = require('os');
const cluster = require('cluster');

if (cluster.isMaster) {
  const n_cpus = os.cpus().length;
  console.log(`forking ${n_cpus} CPUs`);
  for (let i = 0; i < n_cpus; i += 1) {
    cluster.fork();
  }
} else {
  require('newrelic');
  const express = require('express');
  const cache = require('express-cache-controller');

  // Controllers
  const { getSimilarHomes } = require('./controllers/getSimilarHomes');
  const { postNewProperty } = require('./controllers/postNewProperty');
  // const { patchProperty } = require('./controllers/patchProperty');
  const { deleteProperty } = require('./controllers/deleteProperty');

  const app = express();
  app.use(express.json());

  const PORT = 3004;
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
  // app.patch('/properties/:id/similarHomes', patchProperty);
  app.delete('/properties/:id/similarHomes', deleteProperty);
}


// Will need to update locations schema in order to properly create PATCH Request
// The location schema needs to include all relevant data about the property, so that a successful patch request can bee created, need to awsBlockUrl, and description
