const cleanUpLocationQuery = (resultArr) => {
  const result = resultArr[0];
  result.uuid = result.uuid.toString();
  result.rating = result.rating.toString();
  return result;
};

const assemblePropertyQuery = (table, location, queryCharacteristic, limitNumber) => {
  let query = `select * from propertiesby${table} where location='${location}'`;

  switch (table) {
    case 'rating':
      return query += ` limit ${limitNumber};`;
    case 'price':
      return query += ` and price_per_night < ${queryCharacteristic} limit ${limitNumber};`;
    case 'propertyType':
      return query += ` and property_type='${queryCharacteristic}' limit ${limitNumber};`;
    case 'numberOfBeds':
      return query += ` and bed_num=${queryCharacteristic} limit ${limitNumber};`;
    default:
      throw new Error('Table does not exist for this query');
  }
};

const cleanUpPropertyQuery = (resultArr) => {
  return resultArr.map(row => {
    row.uuid = row.uuid.toString();
    row.rating = row.rating.toString();
    return row;
  });
};

module.exports.cleanUpLocationQuery = cleanUpLocationQuery;
module.exports.assemblePropertyQuery = assemblePropertyQuery;
module.exports.cleanUpPropertyQuery = cleanUpPropertyQuery;