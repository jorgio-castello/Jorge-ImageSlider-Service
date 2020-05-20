const db = require('../db/index.js');

module.exports = {
  getRoomData: (req, res) => {
    db.query('select * from roomtable', (err, results) => {
      if (err) {
        res.status(500).send(err);
        console.error(err);
        return;
      }
      res.status(200).send(results.rows);
    });
  },
  createHost: (req, res) => {
    const { name } = req.body;
    const query = `INSERT INTO hostTable (name) VALUES ('${name}')`;
    db.query(query, (err) => {
      if (err) {
        res.status(500).send(err);
        console.error(err);
        return;
      }
    });
    res.status(201).end();
  },
  createRoom: (req, res) => {
    const { host_id, location, rating, room_type, bed_num, description, price_per_night, img_src } = req.body;
    const query = `INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) values(${host_id}, '${location}', ${rating}, '${room_type}', ${bed_num}, '${description}', ${price_per_night}, '${img_src}')`;
    db.query(query, (err) => {
      if (err) {
        res.status(500).send(err);
        console.error(err);
        return;
      }
      res.status(201).end();
    });
  }
};
