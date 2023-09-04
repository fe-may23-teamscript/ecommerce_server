/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
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
        field: 'namespace_id',
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      capacityAvailable: {
        field: 'capacity_available',
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      capacity: {
        type: Sequelize.STRING,
      },
      priceRegular: {
        field: 'price_regular',
        type: Sequelize.INTEGER,
      },
      priceDiscount: {
        field: 'price_discount',
        type: Sequelize.INTEGER,
      },
      colorsAvailable: {
        field: 'colors_available',
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
        field: 'main_image',
        type: Sequelize.STRING,
      },
      createdAt: {
        field: 'created_at',
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  },
};
