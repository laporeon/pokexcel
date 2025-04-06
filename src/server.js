import 'dotenv/config';

import express from 'express';

import routes from './routes/index.js';
import { logger } from './utils/logger.js';

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
