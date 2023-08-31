import { createServer } from './createServer';
import dotenv from 'dotenv';

dotenv.config();

import { connect } from './sequelize/db';

connect();

const app = createServer();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  createServer();
  console.log(`Server is running on http://localhost:${port}`);
});
