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

    await queryInterface.bulkInsert('phones', phones);
  },

  async down(queryInterface, Sequelize) {
    const phones = await parsePreparedPhones();

    await queryInterface.bulkDelete('phones', {
      slug: phones.map((phone) => phone.slug),
    });
  },
};
