import express, { Express } from 'express';
const cors = require('cors');

export const createServer = () => {
  const app: Express = express();

    app.use(cors());
    app.use(express.json());

  return app;
};
