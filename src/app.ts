import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import { connect } from './sequelize/db';
import { createServer } from './createServer';

connect();

const app = createServer();
const port = process.env.PORT || 3000;

app.use(cors()).use(express.json());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
