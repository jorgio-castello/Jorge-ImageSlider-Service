const express = require('express');
const { getRoomData, createHost, createRoom, updateHost, updateRoom, deleteHost, deleteRoomsFromHost } = require('./routeHandlers.js');

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
app.get('/rooms', getRoomData);
app.post('/createHost', createHost); // Post Route - Host
app.post('/createRoom', createRoom); // Post Route - Rooms
app.put('/updateHost', updateHost);  // Put Route - Host
app.put('/updateRoom', updateRoom);  // Put Route - Rooms
app.delete('/deleteHost', deleteHost); // Delete Route - Host
app.delete('/deleteRoomsFromHost', deleteRoomsFromHost); // Delete an item