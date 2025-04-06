import path from 'node:path';
import { fileURLToPath } from 'node:url';

import xlsx from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.resolve(
  __dirname,
  '..',
  '..',
  'assets',
  'pokemondata.xlsx'
);

export const getPokemonDataFromExcelFile = () => {
  const spreadSheet = xlsx.readFile(inputFilePath, { cellDates: true });
  const data = xlsx.utils.sheet_to_json(spreadSheet.Sheets['Sheet1']);

  return data;
};
