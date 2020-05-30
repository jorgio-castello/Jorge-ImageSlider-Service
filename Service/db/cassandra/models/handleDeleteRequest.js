const db = require('..');
const { assembleDeleteRequest } = require('./helpers/deleteRequestHelpers');

const handleDeleteRequest = (tables, tableToCharacteristic, data, id, callback) => {
  const { location, uuid } = data;

  const queries = tables.map(table => assembleDeleteRequest(table, location, uuid, data[tableToCharacteristic[table]]));

  queries.push({
    query: 'delete from locations where address_id=?',
    params: [id],
  });

  db.batch(queries, { prepare: true })
    .then((success) => callback(null, success))
    .catch((err) => callback(err));
};

module.exports.handleDeleteRequest = handleDeleteRequest;
