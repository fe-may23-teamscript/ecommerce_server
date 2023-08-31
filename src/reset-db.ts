import dotenv from 'dotenv';

dotenv.config();

import { sequelize, connect } from './sequelize/db';
import { Phone } from './models/Phones';
import fs from 'fs';
import path from 'path';

function reset() {
  return sequelize.sync({ force: true });
}

const phones = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../public/api/phones.json'), {
    encoding: 'utf8',
  }),
);

function addPhones() {
  return Phone.bulkCreate(phones).catch((error) =>
    console.log('Unable to create phones', error),
  );
}

connect()
  .then(reset)
  .then(addPhones)
  .finally(() => {
    sequelize.close();
  });
