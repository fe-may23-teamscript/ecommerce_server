/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const fs = require('fs');
const path = require('path');

// You should NEVER modify this parsing function or source JSON files!
async function parsePreparedTablets() {
  const tabletsJSON = fs.readFileSync(
    path.resolve(__dirname, '../public/api/preparedTablets.json'),
    {
      encoding: 'utf8',
    },
  );

  return JSON.parse(tabletsJSON);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tablets = await parsePreparedTablets();

    const mappedTablets = tablets.map((tablet) => {
      const mappedTablet = {
        namespace_id: tablet.namespaceId,
        capacity_available: tablet.capacityAvailable,
        price_regular: tablet.priceRegular,
        price_discount: tablet.priceDiscount,
        colors_available: tablet.colorsAvailable,
        main_image: tablet.mainImage,
        ...tablet,
      };

      delete mappedTablet.namespaceId;
      delete mappedTablet.capacityAvailable;
      delete mappedTablet.priceRegular;
      delete mappedTablet.priceDiscount;
      delete mappedTablet.colorsAvailable;
      delete mappedTablet.mainImage;

      return mappedTablet;
    });

    await queryInterface.bulkInsert('products', mappedTablets);
  },

  async down(queryInterface, Sequelize) {
    const tablets = await parsePreparedTablets();

    await queryInterface.bulkDelete('products', {
      slug: tablets.map((tablet) => tablet.slug),
    });
  },
};
