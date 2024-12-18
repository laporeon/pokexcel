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
  'pokemondata.xlsx',
);

export const convertXLSXToJSON = () => {
  const spreadSheet = xlsx.readFile(inputFilePath);
  const data = xlsx.utils
    .sheet_to_json(spreadSheet.Sheets['Sheet1'], { header: 1 })
    .slice(1);

  return data;
};
