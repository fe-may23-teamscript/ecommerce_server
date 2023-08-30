import { Sequelize } from 'sequelize-typescript';
import { Phones } from '../models/Phones';


const { DB_PASSWORD, DB_HOST, DB_NAME, DB_USER } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
console.log(URI);

export const sequelize = new Sequelize(URI, {
  models: [Phones],
  // repositoryMode: true
});


export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
