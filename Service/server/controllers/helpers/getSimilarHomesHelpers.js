const { tableToCharacteristicMap, tableToCharacteristicArr } = require('./tableGlossary');
const { handlePropertyQuery } = require('../../../db/cassandra/models/handleGetRequest');

const handleSpecificPropertyQuery = (data, table, location, limit, callback) => {
  const tableCharacteristic = tableToCharacteristicMap[table];
  const queryDataPoint = data[tableCharacteristic];

  handlePropertyQuery(table, location, queryDataPoint, limit, callback);
};

const handleGeneralPropertyQuery = (data, location, limit, callback) => {
  const getData = (rankingData = [], count = 0) => {
    if (count === tableToCharacteristicArr.length) {
      callback(null, rankingData);
    } else {
      const rankBy = tableToCharacteristicArr[count];
      const tableCharacteristic = data[tableToCharacteristicMap[rankBy]];

      handlePropertyQuery(rankBy, location, tableCharacteristic, 3, (err, result) => {
        if (err) {
          callback(err);
        } else {
          rankingData.push(...result);
          getData(rankingData, count + 1);
        }
      });
    }
  };

  getData();
};

module.exports.handleSpecificPropertyQuery = handleSpecificPropertyQuery;
module.exports.handleGeneralPropertyQuery = handleGeneralPropertyQuery;
