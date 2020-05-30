const assembleDeleteRequest = (table, location, uuid, queryCharacteristic) => {
  let query = `delete from propertiesby${table} where location=? and uuid=?`;

  switch (table) {
    case 'rating':
      query += ' and rating=?';
      return {
        query,
        params: [location, uuid, queryCharacteristic],
      };
    case 'price':
      query += ' and price_per_night=?';
      return {
        query,
        params: [location, uuid, queryCharacteristic],
      };
    case 'propertyType':
      query += ' and property_type=?';
      return {
        query,
        params: [location, uuid, queryCharacteristic],
      };
    case 'numberOfBeds':
      query += ' and bed_num=?';
      return {
        query,
        params: [location, uuid, queryCharacteristic],
      };
    default:
      throw new Error('Table does not exist for this query');
  }
};

module.exports.assembleDeleteRequest = assembleDeleteRequest;
