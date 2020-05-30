// Models
const { handleLocationQuery } = require('../../db/cassandra/models/handleGetRequest');
// Helpers
const { handleSpecificPropertyQuery, handleGeneralPropertyQuery } = require('./helpers/getSimilarHomesHelpers');

const getSimilarHomes = (req, res) => {
  const { id, rankBy, limit } = req.params;
  handleLocationQuery(id, (locationQueryErr, locationQueryData) => {
    if (locationQueryErr) {
      throw new Error(locationQueryErr);
    }

    const { location } = locationQueryData;

    if (rankBy && limit) {
      handleSpecificPropertyQuery(locationQueryData, rankBy, location, limit, (propertyErr, propertyData) => {
        if (propertyErr) {
          throw new Error(propertyErr);
        } else {
          res.json(propertyData);
        }
      });
    } else {
      handleGeneralPropertyQuery(locationQueryData, location, 3, (propertyErr, propertyData) => {
        if (propertyErr) {
          throw new Error(propertyErr);
        } else {
          res.json(propertyData);
        }
      });
    }
  });
};

module.exports.getSimilarHomes = getSimilarHomes;
