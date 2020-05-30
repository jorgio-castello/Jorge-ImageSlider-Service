const assemblePropertyInsertionQuery = (table, data) => {
  const {
    location,
    uniqueUUID,
    bedNum,
    awsBlockUrl,
    pricePerNight,
    description,
    propertyType,
    rating,
  } = data;
  let query = `insert into propertiesby${table}`;

  switch (table) {
    case 'rating':
      query += `(location, rating, uuid, awsBlockUrl, bed_num, description, price_per_night, property_type)
                values('${location}',${rating},${uniqueUUID},${awsBlockUrl},${bedNum},'${description}',${pricePerNight},${propertyType})`;
      return query;
    // case 'price':
    // case 'propertyType':
    // case 'numberOfBeds':
    default:
      throw new Error('Table does not exist for this query');
  }
};

module.exports.assemblePropertyInsertionQuery = assemblePropertyInsertionQuery;
