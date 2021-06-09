// extensibilité
// on peut créer des clés / valeurs dynamiquement

// console.log(Math.sum);
// Math.sum = (a, b) => a + b;
// console.log(Math.sum);
// console.log(Math.sum(1, 2));

// console.log(Math.random);
// delete Math.random;
// console.log(Math.random);

// Créer des objets
// 2 syntaxes possibles

// object literal (assez proche de JSON)
// 2 cas d'utilisation
// - suffisament à créer pour se passer d'une fonction
//   et sans méthodes
// - s'il contient des méthodes l'objet doit être unique
const coords = {
  x: 1,
  y: 2,
};

coords.z = 3;

const MyMath = {
  sum: (a, b) => a + b,
};

// constructor (fonction constructeur)
// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   return 'Hello my name is ' + this.name;
// };

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return 'Hello my name is ' + this.name;
  }
}


const romain = new Contact('Romain');
console.log(typeof romain);
console.log(romain.hello());

const jean = new Contact('Jean');
console.log(typeof jean);
console.log(jean.hello());

console.log(romain.hello === jean.hello); // false (dupliqué) / true sinon
