import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './routes/product';
import createHttpError, { HttpError } from 'http-errors';

export const createServer = () => {
  const app = express();

  app.use(cors()).use(express.json());

  app.use('/img', express.static('public/img'));

  app.use('/products', productRouter);

  app.use((req, res, next) => {
    next(createHttpError(404));
  });

  app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
      const { status = 500, message = 'Internal Server Error' } = err;
      res.status(status).json({ message });
    },
  );

  return app;
};
