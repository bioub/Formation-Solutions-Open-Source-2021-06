const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};

// Module CommonJS (Node.js)
const readline = require('readline');

class Jeu {
  essais = [];
  #rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  constructor(options) {
    const min = options?.min ?? 0;
    const max = options?.max ?? 100;
    this.entierAlea = Random.getInt(min, max);
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez saisi : ' + this.essais.join(' puis '));
    }

    this.#rl.question('Quel est le nombre ? ', (answer) => {
      // convertir answer en Number
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)){
        console.log('Il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.#rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();

// pile d'appel de fonction
// ^
// |                                   question                question
// |question                           jouer                   jouer
// |jouer    ...                       callback ...            callback
// +-----------------------------------ENTREE------------------ENTREE--------------> temps
//
