// const uuid = require('uuid');
// const db = require('..');
// const { assemblePropertyInsertionQuery } = require('./helpers/postRequestHelpers');

// const handleLocationInsertion = (data, callback) => {
//   const {
//     addressId,
//     uniqueUUID,
//     bedNum,
//     location,
//     pricePerNight,
//     propertyType,
//     rating,
//   } = data;

//   const query = `insert into locations(address_id,uuid,bed_num,location,price_per_night,property_type,rating)
//                  values(${addressId},${uniqueUUID},${bedNum},'${location}',${pricePerNight},'${propertyType}',${rating})`;
//   db.execute(query)
//     .then((success) => callback(null, success))
//     .catch((err) => callback(err));
// };

// const handlePropertyInsertion = (table, data, callback) => {
//   const query = assemblePropertyInsertionQuery(table, data);
//   console.log(query);
// };

// const data = { addressId: 10000003, uniqueUUID: uuid.v1(), bedNum: 4, location: 'Los Angeles', pricePerNight: 150, propertyType: 'Home', rating: 5 };

// handleLocationInsertion(data, (err, success) => console.log(success));

// module.exports.handleLocationInsertion = handleLocationInsertion;
// module.exports.handlePropertyInsertion = handlePropertyInsertion;
