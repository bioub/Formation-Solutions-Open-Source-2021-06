import { hello } from './hello.js'

const names = ['Jean', 'Paul', 'Eric'];

for (const n of names) {
  console.log(hello(n));
}

// bundler : webpack, Rollup
