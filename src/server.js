import 'dotenv/config';
import express from 'express';

import { convertXLSXToJSON } from './libs/xlsx.js';

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (_, response) => {
  response.json({ message: 'Welcome to PokeAPI!' });
});

app.get('/pokemons', async (_, response) => {
  const data = await convertXLSXToJSON();
  response.json({ data });
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
