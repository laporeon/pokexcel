import { Router } from 'express';

import { PokemonController } from '../controllers/pokemon.controller.js';

const pokemonController = new PokemonController();

const routes = Router();

routes.get('/', pokemonController.getAll);
routes.post('/', pokemonController.bulkCreate);

export { routes as pokemonRoutes };
