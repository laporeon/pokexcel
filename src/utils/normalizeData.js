import { getPokemonDataFromExcelFile } from './readPokemonData.js';

const normalizeKey = key =>
  key
    .toLowerCase()
    .replace(/^[0-9]+/, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

const pokemonsData = getPokemonDataFromExcelFile();

export const pokeData = pokemonsData.map(pokemon => {
  const { Row, ...data } = pokemon;
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [normalizeKey(key), value])
  );
});
