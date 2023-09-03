/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// You should NEVER modify this parsing function or source JSON files!
async function preparePhones() {
  const phonesBriefInfo = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../public/api/phones.json'), {
      encoding: 'utf8',
    }),
  );

  const directory = path.resolve(__dirname, '../public/api/phones');
  const fileNames = fs.readdirSync(directory);
  const phones = [];

  fileNames.forEach((fileName) => {
    if (path.extname(fileName) === '.json') {
      const fileData = fs.readFileSync(
        path.resolve(directory, fileName),
        'utf-8',
      );

      const preparedPhone = JSON.parse(fileData);

      preparedPhone.slug = preparedPhone.id;
      delete preparedPhone.id;

      preparedPhone.description = JSON.stringify(preparedPhone.description);

      const briefInfo = phonesBriefInfo.find(
        (phone) => phone.phoneId === preparedPhone.slug,
      );

      preparedPhone.category = briefInfo.category;
      preparedPhone.year = briefInfo.year;
      preparedPhone.mainImage = briefInfo.image;

      phones.push(preparedPhone);
    }
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../public/api/preparedPhones.json'),
    JSON.stringify(phones),
  );

  console.log('Completed!');
}

preparePhones();
