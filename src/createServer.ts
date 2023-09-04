import express from 'express';
import cors from 'cors';
import productRouter from './routes/product';

export const createServer = () => {
  const app = express();

  app.use(cors()).use(express.json());

  app.use('/img', express.static('public/img'));

  app.use('/products', productRouter);

  return app;
};
