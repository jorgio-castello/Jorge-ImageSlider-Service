const db = require('..');
const { handleLocationQuery } = require('./handleGetRequest');
const { generateUpdatedCassandraData, generateDeleteQueries, generateNewInsertQueries } = require('./helpers/patchRequestHelpers');


const handlePatchRequest = ({ id }, updateParams, tablesIndexObj, tablesIndexArr, callback) => {
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
          const updatedCassandraData = generateUpdatedCassandraData(row, updateParams);
          const deleteQueries = generateDeleteQueries(tablesIndexArr, tablesIndexObj, id, location, uuid, row);
          const insertQueries = generateNewInsertQueries(tablesIndexArr, id, location, uuid, updatedCassandraData);

          db.batch(deleteQueries, { prepare: true })
            .then(() => {
              db.batch(insertQueries, { prepare: true })
                .then(success => callback(null, success))
                .catch(err => callback(err));
            })
            .catch(err => callback(err));
        })
        .catch(err => callback(err));
    }
  });
};

module.exports.handlePatchRequest = handlePatchRequest;
