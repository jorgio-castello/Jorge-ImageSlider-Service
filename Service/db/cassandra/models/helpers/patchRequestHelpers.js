const { assembleDeleteRequest } = require('./deleteRequestHelpers');
const { assemblePropertyInsertionQuery } = require('./postRequestHelpers');

const generateUpdatedCassandraData = (row, { newRating, newPrice_per_night, newDescription, newAwsblockurl }) => {
  const { location, uuid, bed_num, property_type, awsblockurl, rating, description, price_per_night } = row;

  return {
    location,
    uniqueUUID: uuid,
    bed_num: bed_num,
    property_type: property_type,
    awsBlockUrl: newAwsblockurl || awsblockurl,
    rating: newRating || rating,
    description: newDescription || description,
    price_per_night: newPrice_per_night || price_per_night,
  }
};

const generateDeleteQueries = (tablesIndexArr, tablesIndexObj, id, location, uuid, row) => {
  // Delete existing rows of the same uuid in all Cassandra tables
  let deleteQueries = tablesIndexArr.map(table => {
    return assembleDeleteRequest(table, location, uuid, row[tablesIndexObj[table]]);
  });

  deleteQueries.push({
    query: 'delete from locations where address_id=?',
    params: [id],
  });

  return deleteQueries;
};

const generateNewInsertQueries = (tablesIndexArr, id, location, uuid, updatedCassandraData) => {
  let { bed_num, property_type, price_per_night, rating } = updatedCassandraData;

  // Post updatedCassandra row into all tables
  let insertUpdateQueries = tablesIndexArr.map(table => {
    return assemblePropertyInsertionQuery(table, updatedCassandraData);
  });

  insertUpdateQueries.push({
    query: 'insert into locations(address_id,uuid,bed_num,location,price_per_night,property_type,rating) values(?,?,?,?,?,?,?);',
    params: [id, uuid, bed_num, location, price_per_night, property_type, rating],
  });

  return insertUpdateQueries;
}

module.exports.generateUpdatedCassandraData = generateUpdatedCassandraData;
module.exports.generateDeleteQueries = generateDeleteQueries;
module.exports.generateNewInsertQueries = generateNewInsertQueries;
