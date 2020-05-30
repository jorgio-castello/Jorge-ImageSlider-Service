// Models
const { handleLocationQuery } = require('../../db/cassandra/models/handleGetRequest');
const { handleDeleteRequest } = require('../../db/cassandra/models/handleDeleteRequest');
const { tableToCharacteristicMap, tableToCharacteristicArr } = require('./helpers/tableGlossary');

const deleteProperty = (req, res) => {
  const { id } = req.params;
  handleLocationQuery(id, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      handleDeleteRequest(tableToCharacteristicArr, tableToCharacteristicMap, data, id, (err) => {
        if (err) {
          throw new Error(err);
        } else {
          res.status(200);
          res.end();
        }
      });
    }
  });
};

module.exports.deleteProperty = deleteProperty;
