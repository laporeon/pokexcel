import 'dotenv/config';
import express from 'express';

import { pokemonRoutes } from './routes/pokemon.route.js';

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use('/pokemons', pokemonRoutes);

app.get('/', (_, response) => {
  response.json({ message: 'Welcome to PokeAPI!' });
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
