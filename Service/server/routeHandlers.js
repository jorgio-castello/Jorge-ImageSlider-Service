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
};
