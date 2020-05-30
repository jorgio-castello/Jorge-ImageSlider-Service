const cleanUpLocationQuery = (resultArr) => {
  const result = resultArr[0];
  result.uuid = result.uuid.toString();
  result.rating = result.rating.toString();
  return result;
};

const assemblePropertyQuery = (table, location, queryCharacteristic, limitNumber) => {
  let query = `select * from propertiesby${table} where location=?`;

  switch (table) {
    case 'rating':
      query += ' limit ?';
      return {
        query,
        params: [location, limitNumber],
      };
    case 'price':
      query += ' and price_per_night < ? limit ?';
      return {
        query,
        params: [location, queryCharacteristic, limitNumber],
      };
    case 'propertyType':
      query += ' and property_type=? limit ?';
      return {
        query,
        params: [location, queryCharacteristic, limitNumber],
      };
    case 'numberOfBeds':
      query += ' and bed_num=? limit ?';
      return {
        query,
        params: [location, queryCharacteristic, limitNumber],
      };
    default:
      throw new Error('Table does not exist for this query');
  }
};

const cleanUpPropertyQuery = (resultArr) => {
  return resultArr.map((row) => {
    row.uuid = row.uuid.toString();
    row.rating = row.rating.toString();
    return row;
  });
};

module.exports.cleanUpLocationQuery = cleanUpLocationQuery;
module.exports.assemblePropertyQuery = assemblePropertyQuery;
module.exports.cleanUpPropertyQuery = cleanUpPropertyQuery;
