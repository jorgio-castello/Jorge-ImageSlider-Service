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
  const query = assemblePropertyQuery(table, location, queryCharacteristic, limitNumber);

  db.execute(query)
    .then((data) => cleanUpPropertyQuery(data.rows))
    .then((propertyInformation) => callback(null, propertyInformation))
    .catch((err) => callback(err));
};

module.exports.handleLocationQuery = handleLocationQuery;
module.exports.handlePropertyQuery = handlePropertyQuery;

// handleLocationQuery(50, (err, result) => console.log(result));
// handlePropertyQuery('price', 'Ziemestad', 1200, 4, (data) => console.log(data));
