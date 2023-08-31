/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const fs = require('fs');
const path = require('path');

// You should NEVER modify this parsing function or source JSON file!
async function parseInitialPhones() {
  const phonesJSON = fs.readFileSync(
    path.resolve(__dirname, '../public/api/phones.json'),
    {
      encoding: 'utf8',
    },
  );

  return JSON.parse(phonesJSON);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const phones = await parseInitialPhones();

    await queryInterface.bulkInsert('phones', phones);
  },

  async down(queryInterface, Sequelize) {
    const phones = await parseInitialPhones();

    await queryInterface.bulkDelete('phones', {
      id: phones.map((phone) => phone.id),
    });
  },
};
