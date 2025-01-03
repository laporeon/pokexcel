import { prisma } from '../libs/prisma.js';
import { logger } from '../utils/logger.js';
import { pokeData } from '../utils/normalizeData.js';
export class PokemonController {
  async get(request, response) {
    const { name, pokedex_number, type } = request.query;

    const pokemons = await prisma.pokemon.findMany({
      where: {
        ...(name && { name }),
        ...(pokedex_number && { pokedex_number: Number(pokedex_number) }),
        ...(type && {
          OR: [{ type_1: type }, { type_2: type }],
        }),
      },
    });

    if (!pokemons)
      return response.status(404).json({ error: 'Resource not found.' });

    logger.info({
      url: request.originalUrl,
      method: request.method,
      messsage: `${pokemons.length} pokemons were found.`,
    });

    return response.status(200).json({ pokemons });
  }

  async bulkCreate(request, response) {
    const hasData = await prisma.pokemon.findMany({});

    if (hasData.length !== 0) {
      logger.error({
        url: request.originalUrl,
        method: request.method,
        error: 'Excel data was already imported and stored at database.',
      });

      return response.status(409).json({
        error: 'Excel data was already imported and stored at database.',
      });
    }

    // TODO: find a "more clean" way to deal with saving pokemon data without messing up their order
    const pokemons = [];

    for (const pokemon of pokeData) {
      const createdPokemon = await prisma.pokemon.create({ data: pokemon });
      pokemons.push(createdPokemon);
    }

    logger.info({
      url: request.originalUrl,
      method: request.method,
      messsage: `${pokemons.length} pokemons were imported from spreadsheet and stored at database.`,
    });

    return response.status(201).json({ pokemons });
  }

  // Just in case you need to clean up the database and import the data again
  async bulkDelete(request, response) {
    const pokemons = await prisma.pokemon.findMany({});

    await prisma.pokemon.deleteMany({});

    logger.info({
      url: request.originalUrl,
      method: request.method,
      messsage: `${pokemons.length} pokemons were deleted from database.`,
    });

    return response.status(204).json({});
  }
}
