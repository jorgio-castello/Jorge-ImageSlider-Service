const express = require('express');
const { getRoomData } = require('./routeHandlers.js');

const app = express();

const PORT = 3004;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(express.static('public'));
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// routes
app.get('/rooms', getRoomData);
