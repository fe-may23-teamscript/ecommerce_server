// import { createServer } from './createServer';
// import dotenv from 'dotenv';
//
// dotenv.config();
//
// const app = createServer();
// const port = process.env.PORT || 3000;
//
// app.listen(port, () => {
//   createServer();
//   // eslint-disable-next-line no-console
//   console.log(`Server is running on http://localhost:${port}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from './sequelize/db';


connect();

const { PORT } = process.env;

const app = express();

app
  .use(cors())
  .use(express.json())

app.listen(PORT, () => {
  console.log(`🚀 Server on  ${PORT}`);
});
