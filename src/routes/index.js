import { Router } from 'express';

import { pokemonRoutes } from './pokemon.routes.js';
import { swaggerRoutes } from './swagger.routes.js';

const routes = Router();

routes.use('/pokemons', pokemonRoutes);
routes.use('/documentation', swaggerRoutes);

export default routes;
