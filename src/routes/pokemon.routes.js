import { Router } from 'express';

import { PokemonController } from '../controllers/pokemon.controller.js';

const pokemonController = new PokemonController();

const routes = Router();

routes.get('/', pokemonController.get);
routes.post('/', pokemonController.bulkCreate);
routes.delete('/', pokemonController.bulkDelete);

export { routes as pokemonRoutes };
