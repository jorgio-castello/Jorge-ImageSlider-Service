// Models
const { handleLocationQuery } = require('../../db/cassandra/models/handleGetRequest');
// Helpers
const { reassignParamsIfEmpty, handleSpecificPropertyQuery, handleGeneralPropertyQuery } = require('./helpers/getSimilarHomesHelpers');

const redisUrl = process.env.redisURL || '127.0.0.1';
const redisPort = 6379;

const redisClient = require('redis').createClient;
const redis = redisClient(redisPort, redisUrl);

const getSimilarHomes = (req, res) => {
  const [id, rankBy, limit] = reassignParamsIfEmpty(req.params);

  handleLocationQuery(id, (locationQueryErr, locationQueryData) => {
    if (locationQueryErr) {
      throw new Error(locationQueryErr);
    }

    const { uuid, location } = locationQueryData;

    if (rankBy && limit) {
      handleSpecificPropertyQuery(locationQueryData, rankBy, location, limit, (propertyErr, propertyData) => {
        if (propertyErr) {
          throw new Error(propertyErr);
        } else {
          res.json(propertyData);
        }
      });
    } else {
      redis.get(uuid, (redisErr, results) => {
        if (redisErr) {
	        throw new Error(redisErr);
	      } else if (results) {
          res.json(results);
	      } else {
          handleGeneralPropertyQuery(locationQueryData, location, 3, (propertyErr, propertyData) => {
             if (propertyErr) {
                throw new Error(propertyErr);
             } else {
               redis.set(uuid, JSON.stringify(propertyData));
	       res.json(propertyData);
             }
          });
	}
      });
    }
  });
};

module.exports.getSimilarHomes = getSimilarHomes;
