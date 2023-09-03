'use strict';

import { Sequelize } from 'sequelize-typescript';
import { Phone } from '../models/Phone';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  models: [Phone],
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
