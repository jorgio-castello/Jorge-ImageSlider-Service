const uuid = require('uuid');
const { handleLocationInsertion } = require('../../db/cassandra/models/handlePostRequest');
const { insertPropertyToAllCassandraTables } = require('./helpers/postNewHomeHelpers');

const postNewProperty = (req, res) => {
  req.body.uniqueUUID = uuid.v1();

  handleLocationInsertion(req.body, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      insertPropertyToAllCassandraTables(req.body, (err) => {
        if (err) {
          throw new Error(err);
        } else {
          res.status(201);
          res.end();
        }
      });
    }
  });
};

module.exports.postNewProperty = postNewProperty;
