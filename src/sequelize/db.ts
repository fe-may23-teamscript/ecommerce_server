import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('postgres', 'postgres', 'oleh', {});

module.exports = { sequelize };
