const express = require('express');
const { getRoomData, createHost, createRoom } = require('./routeHandlers.js');

const app = express();
app.use(express.json());

const PORT = 3004;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(express.static('public'));
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// Get Route - currently this is sending back the whole DB, will refactor schema to include a property table
// Related properties will
app.get('/rooms', getRoomData);

// Post Route - Host
app.post('/createHost', createHost);

// Post Route - Rooms
app.post('/createRoom', createRoom);

// Put Route

// Delete an item