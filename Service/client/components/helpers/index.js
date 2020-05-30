const Axios = require('axios');

const getPictureData = (relatedHomesArr, callback) => {
  const requestPhotoDataFromAWS = (count = 0) => {
    if (count === relatedHomesArr.length) {
      callback(relatedHomesArr);
    } else {
      const url = relatedHomesArr[count].awsblockurl;
      Axios.get(url)
        .then((photos) => photos.data.map(image => image.body))
        .then((photoData) => {
          relatedHomesArr[count].img_src = photoData;
        })
        .then(() => requestPhotoDataFromAWS(count + 1));
    }
  };
  requestPhotoDataFromAWS();
};

export default getPictureData;
