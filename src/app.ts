import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connect } from './sequelize/db';
import { createServer } from './createServer';
import { phonesRouter } from './routes/phones';

connect();

const { PORT } = process.env;

const app = express();

app.use(cors()).use(express.json());

app.use('/phones', phonesRouter);
app.use('/ten-with-disc', phonesRouter);

app.listen(PORT, () => {
  createServer();
  console.log(`🚀 Server on  ${PORT}`);
});
