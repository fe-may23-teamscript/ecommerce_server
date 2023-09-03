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
      slug: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      namespaceId: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      capacityAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      capacity: {
        type: Sequelize.STRING,
      },
      priceRegular: {
        type: Sequelize.INTEGER,
      },
      priceDiscount: {
        type: Sequelize.INTEGER,
      },
      colorsAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      color: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      description: {
        type: Sequelize.JSONB,
      },
      screen: {
        type: Sequelize.STRING,
      },
      resolution: {
        type: Sequelize.STRING,
      },
      processor: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      camera: {
        type: Sequelize.STRING,
      },
      zoom: {
        type: Sequelize.STRING,
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      category: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      mainImage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
