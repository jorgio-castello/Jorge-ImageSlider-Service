const db = require('..');
const { handleLocationQuery } = require('./handleGetRequest');
const { assemblePropertyPatchQuery } = require('./helpers/patchRequestHelpers');
const { assembleDeleteRequest } = require('./helpers/deleteRequestHelpers');
const { assemblePropertyInsertionQuery } = require('./helpers/postRequestHelpers');

let dictionary = {
  numberOfBeds: 'bed_num',
  propertyType: 'property_type',
  price: 'price_per_night',
  rating: 'rating',
};

const handlePatchRequest = ({ id }, { newRating, newPrice_per_night, newDescription, newAwsblockurl }, tableToCharacteristicMap, tableToCharacteristicArr, callback) => {
  handleLocationQuery(id, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      let { location, uuid } = data;
      let oldRating = data.rating;

      // Query the ratings table to get relevant information necessary
      const getDetailsQuery = `select * from propertiesbyrating where location=? and rating=? and uuid=?`;
      const getDetailsParams = [location, oldRating, uuid];

      db.execute(getDetailsQuery, getDetailsParams, { prepare: true })
        .then(data => data.rows[0])
        .then(row => {
          let updatedCassandraData = {
            location,
            uniqueUUID: uuid,
            bed_num: row.bed_num,
            property_type: row.property_type,
            awsBlockUrl: newAwsblockurl || row.awsblockurl,
            rating: newRating || row.rating,
            description: newDescription || row.description,
            price_per_night: newPrice_per_night || row.price_per_night,
          }

          // Delete existing rows of the same uuid
          let deleteQueries = ['numberOfBeds', 'propertyType', 'price', 'rating'].map(table => {
            return assembleDeleteRequest(table, location, uuid, row[dictionary[table]]);
          });

          deleteQueries.push({
            query: 'delete from locations where address_id=?',
            params: [id],
          });

          // Post updatedCassandra row into all tables
          let insertUpdateQueries = ['numberOfBeds', 'propertyType', 'price', 'rating'].map(table => {
            return assemblePropertyInsertionQuery(table, updatedCassandraData);
          });


          let { bed_num, property_type, price_per_night, rating } = updatedCassandraData;

          insertUpdateQueries.push({
            query: 'insert into locations(address_id,uuid,bed_num,location,price_per_night,property_type,rating) values(?,?,?,?,?,?,?);',
            params: [id, uuid, bed_num, location, price_per_night, property_type, rating],
          });

          db.batch(deleteQueries, { prepare: true })
            .then(() => {
              db.batch(insertUpdateQueries, { prepare: true })
                .then(success => console.log(success))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));


        })
        .catch(err => console.log(err));
    }
  });
};



module.exports.handlePatchRequest = handlePatchRequest;
