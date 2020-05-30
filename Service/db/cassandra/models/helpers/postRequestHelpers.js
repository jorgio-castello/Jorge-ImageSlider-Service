/* eslint-disable camelcase */
// Allowing camel case to distinguish between variable names / db tables
const assemblePropertyInsertionQuery = (table, data) => {
  const {
    location,
    uniqueUUID,
    bed_num,
    awsBlockUrl,
    price_per_night,
    description,
    property_type,
    rating,
  } = data;

  let query = `insert into propertiesby${table}`;

  switch (table) {
    case 'rating':
      query += '(location,rating,uuid,awsblockurl,bed_num,description,price_per_night,property_type) values(?,?,?,?,?,?,?,?);';
      return {
        query,
        params: [location, rating, uniqueUUID, awsBlockUrl, bed_num, description, price_per_night, property_type],
      };
    case 'price':
      query += '(location,price_per_night,uuid,awsblockurl,bed_num,description,rating,property_type) values(?,?,?,?,?,?,?,?);';
      return {
        query,
        params: [location, price_per_night, uniqueUUID, awsBlockUrl, bed_num, description, rating, property_type],
      };
    case 'propertyType':
      query += '(location,property_type,uuid,awsblockurl,bed_num,description,rating,price_per_night) values(?,?,?,?,?,?,?,?);';
      return {
        query,
        params: [location, property_type, uniqueUUID, awsBlockUrl, bed_num, description, rating, price_per_night],
      };
    case 'numberOfBeds':
      query += '(location,bed_num,uuid,awsblockurl,description,rating,price_per_night,property_type) values(?,?,?,?,?,?,?,?);';
      return {
        query,
        params: [location, bed_num, uniqueUUID, awsBlockUrl, description, rating, price_per_night, property_type],
      };
    default:
      throw new Error('Table does not exist for this query');
  }
};

module.exports.assemblePropertyInsertionQuery = assemblePropertyInsertionQuery;
