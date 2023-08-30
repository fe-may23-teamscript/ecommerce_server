import dotenv from 'dotenv';
dotenv.config();
import {sequelize, connect} from './sequelize/db';
import { createServer } from './createServer';

function reset() {
  return sequelize.sync({ });
}

connect()
  .then(reset);

const app = createServer();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  createServer();
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
