import { createServer } from './createServer';
import dotenv from 'dotenv';

dotenv.config();

console.log("Hello World!")

const app = createServer();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  createServer();
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
