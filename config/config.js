// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_PASSWORD, DB_HOST, DB_NAME, DB_USER } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const settings = {
  url: URI,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
