/* eslint-disable camelcase */
const db = require('..');
const { assemblePropertyInsertionQuery } = require('./helpers/postRequestHelpers');

const handleLocationInsertion = (data, callback) => {
  const {
    address_id,
    uniqueUUID,
    bed_num,
    location,
    price_per_night,
    property_type,
    rating,
  } = data;

  const query = 'insert into locations(address_id,uuid,bed_num,location,price_per_night,property_type,rating) values(?,?,?,?,?,?,?);';

  db.execute(query, [address_id, uniqueUUID, bed_num, location, price_per_night, property_type, rating], { prepare: true })
    .then((success) => callback(null, success))
    .catch((err) => callback(err));
};

const handlePropertyInsertion = (tables, data, callback) => {
  const queries = tables.map((table) => assemblePropertyInsertionQuery(table, data));

  db.batch(queries, { prepare: true })
    .then((success) => callback(null, success))
    .catch((err) => callback(err));
};

module.exports.handleLocationInsertion = handleLocationInsertion;
module.exports.handlePropertyInsertion = handlePropertyInsertion;
