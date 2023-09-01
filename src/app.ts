import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connect } from './sequelize/db';
import { createServer } from './createServer';

connect();

const { PORT } = process.env;

const app = createServer();

app.use(cors()).use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server on  ${PORT}`);
});
