/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      phoneId: {
        type: Sequelize.STRING,
      },
      itemId: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      fullPrice: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      screen: {
        type: Sequelize.STRING,
      },
      capacity: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
