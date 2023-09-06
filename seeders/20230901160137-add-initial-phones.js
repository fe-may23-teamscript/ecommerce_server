/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const fs = require('fs');
const path = require('path');

// You should NEVER modify this parsing function or source JSON files!
async function parsePreparedPhones() {
  const phonesJSON = fs.readFileSync(
    path.resolve(__dirname, '../public/api/preparedPhones.json'),
    {
      encoding: 'utf8',
    },
  );

  return JSON.parse(phonesJSON);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const phones = await parsePreparedPhones();

    const mappedPhones = phones.map((phone) => {
      const mappedPhone = {
        namespace_id: phone.namespaceId,
        capacity_available: phone.capacityAvailable,
        price_regular: phone.priceRegular,
        price_discount: phone.priceDiscount,
        colors_available: phone.colorsAvailable,
        main_image: phone.mainImage,
        ...phone,
      };

      delete mappedPhone.namespaceId;
      delete mappedPhone.capacityAvailable;
      delete mappedPhone.priceRegular;
      delete mappedPhone.priceDiscount;
      delete mappedPhone.colorsAvailable;
      delete mappedPhone.mainImage;

      return mappedPhone;
    });

    await queryInterface.bulkInsert('products', mappedPhones);
  },

  async down(queryInterface, Sequelize) {
    const phones = await parsePreparedPhones();

    await queryInterface.bulkDelete('products', {
      slug: phones.map((phone) => phone.slug),
    });
  },
};
