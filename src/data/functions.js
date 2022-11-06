/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const sizeOf = require('image-size');

// utility function to get information for image sizes
const getImageInfo = directoryPath => {
  const imageDir = fs.readdirSync(directoryPath);
  const { base } = path.parse(directoryPath);
  const dataArray = imageDir.map(image => {
    const { height, width } = sizeOf(path.join(directoryPath, image));

    return {
      url: path.join('/', 'images', base, image),
      height,
      width,
    };
  });

  return dataArray;
};

console.log(getImageInfo('./public/images/thissite'));
