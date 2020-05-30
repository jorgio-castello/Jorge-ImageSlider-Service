// const db = require('..');
// const { handleLocationQuery } = require('./handleGetRequest');

// const handlePatchRequest = ({ id }, { rating, price_per_night }, callback) => {
//   handleLocationQuery(id, (err, data) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       // new data set
//       const newData = {
//         address_id: id,
//         uniqueUUID: data.uuid,
//         bed_num: data.bed_num,
//         location: data.location,
//         price_per_night: price_per_night || data.price_per_night,
//         property_type: data.property_type,
//         rating: rating || data.rating,
//       };
//       console.log(newData);
//       // Generate delete queries
//       // Generate insert queries
//       // send to DB
//     }
//   });
// };

// module.exports.handlePatchRequest = handlePatchRequest;

// Will need to update locations schema in order to properly create PATCH Request
// The location schema needs to include all relevant data about the property, so that a successful patch request can bee created, need to awsBlockUrl, and description
