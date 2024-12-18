import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import readXlsxFile from 'read-excel-file/node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.resolve(
  __dirname,
  '..',
  '..',
  'assets',
  'pokemondata.xlsx',
);

const outputFilePath = path.resolve(
  __dirname,
  '..',
  'outputs',
  'pokemondata.json',
);

export const readFileData = await readXlsxFile(inputFilePath).then(rows => {
  const jsonData = JSON.stringify(rows, null, 2);
  fs.writeFile(outputFilePath, jsonData, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('file created');
    }
  });

  return rows;
});
