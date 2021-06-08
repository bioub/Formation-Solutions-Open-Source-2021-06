const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    // convertir answer en Number

    console.log('Vous avez saisi ' + answer);

    // pour rejouer
    jouer();

    // si c'est gagné
    // rl.close();
  });
}

jouer();

// pile d'appel de fonction
// ^
// |                                   question                question
// |question                           jouer                   jouer
// |jouer    ...                       callback ...            callback
// +-----------------------------------ENTREE------------------ENTREE--------------> temps
//
