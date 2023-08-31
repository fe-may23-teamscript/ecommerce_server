/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init(
    {
      category: DataTypes.STRING,
      phoneId: DataTypes.STRING,
      itemId: DataTypes.STRING,
      name: DataTypes.STRING,
      fullPrice: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      screen: DataTypes.STRING,
      capacity: DataTypes.STRING,
      color: DataTypes.STRING,
      ram: DataTypes.STRING,
      year: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Phone',
    },
  );
  return Phone;
};
