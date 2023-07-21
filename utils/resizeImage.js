const jimp = require('jimp');

const resizeImage = async (imageDir) => {
  const image = await jimp.read(imageDir);
  image.resize(250, 250);
  return await image.writeAsync(imageDir);
};

module.exports = resizeImage;