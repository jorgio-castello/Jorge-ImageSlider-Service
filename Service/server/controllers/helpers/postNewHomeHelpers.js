const { handlePropertyInsertion } = require('../../../db/cassandra/models/handlePostRequest');
const { tableToCharacteristicArr } = require('./tableGlossary');

const insertPropertyToAllCassandraTables = (data, callback, count = 0) => {
  handlePropertyInsertion(tableToCharacteristicArr, data, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports.insertPropertyToAllCassandraTables = insertPropertyToAllCassandraTables;
