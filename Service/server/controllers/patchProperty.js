// Models
const { handlePatchRequest } = require('../../db/cassandra/models/handlePatchRequest');
const { tableToCharacteristicMap, tableToCharacteristicArr } = require('./helpers/tableGlossary');

const patchProperty = (req, res) => {
  handlePatchRequest(req.params, req.body, tableToCharacteristicMap, tableToCharacteristicArr, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      res.status(204);
      res.end();
    }
  });
};

module.exports.patchProperty = patchProperty;
