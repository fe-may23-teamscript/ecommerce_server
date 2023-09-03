import express from 'express';
import cors from 'cors';
import phonesRouter from './routes/phones';

export const createServer = () => {
  const app = express();

  app.use(cors()).use(express.json());

  app.use('/phones', phonesRouter);

  return app;
};
