// Module ESM (dans Node.js avec spécificité, dans le navigateur navigateur, surtout les bundlers)
import { hello } from './hello.js';

const names = [
  'Jean',
  'Paul',
  'Eric',
  'Romain',
  'Marie',
  'Estelle',
  'Benjamin',
  'David',
];

for (const n of names) {
  console.log(hello(n));
}

// bundler : webpack, Rollup
