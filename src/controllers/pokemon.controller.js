import { prisma } from '../libs/prisma.js';
import { pokeData } from '../utils/normalizeData.js';
import { getPokemonDataFromExcelFile } from '../utils/readPokemonData.js';

export class PokemonController {
  async create() {}

  async getAll(request, response) {
    const pokemons = await prisma.pokemon.findMany();

    return response.status(200).json({ pokemons });
  }

  async bulkCreate(request, response) {
    const hasData = await prisma.pokemon.findMany({});

    if (hasData.length !== 0) {
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

    return response.status(201).json({ pokemons });
  }
}
