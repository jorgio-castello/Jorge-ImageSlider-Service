const db = require('..');
const { cleanUpLocationQuery, assemblePropertyQuery, cleanUpPropertyQuery } = require('./helpers/getRequestHelpers');

const handleLocationQuery = (id, callback) => {
  const query = `select * from locations where address_id=${id}`;
  db.execute(query)
    .then((data) => cleanUpLocationQuery(data.rows))
    .then((locationInformation) => callback(null, locationInformation))
    .catch((err) => callback(err));
};

const handlePropertyQuery = (table, location, queryCharacteristic, limitNumber, callback) => {
  const { query, params } = assemblePropertyQuery(table, location, queryCharacteristic, limitNumber);

  db.execute(query, params, { prepare: true })
    .then((data) => cleanUpPropertyQuery(data.rows))
    .then((propertyInformation) => callback(null, propertyInformation))
    .catch((err) => callback(err));
};

module.exports.handleLocationQuery = handleLocationQuery;
module.exports.handlePropertyQuery = handlePropertyQuery;
