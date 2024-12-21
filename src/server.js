import 'dotenv/config';
import express from 'express';

import routes from './routes/index.js';

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
