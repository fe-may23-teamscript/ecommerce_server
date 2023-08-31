'use strict';

import { Sequelize } from 'sequelize-typescript';
// import { Product, Phone, Description } from '../models';
import dotenv from 'dotenv';
import { Phone } from './tables/Phone';
import { PhoneModel } from './tables/PhoneModel';
import { Description } from './tables/Description';
import { Namespace } from './tables/Namespace';
dotenv.config();

const { URI } = process.env;

export const sequelize = new Sequelize(URI as string, {
  models: [Phone, PhoneModel, Description, Namespace],
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    throw new Error('Cant connect');
  }
}
