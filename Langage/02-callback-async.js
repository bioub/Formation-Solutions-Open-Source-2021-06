setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// E B A D C
// A B D C E
// B E A D C

// Event Loop
// do {
//   execJs();
//   drawPage();
// } while(callbackInQueue());

// pile d'appel de fonction
// ^
// |
// |                                         lg        lg lg         lg
// |st - st - st - st - lg (drawPage) ..⟳.. =>  ..⟳.. => =>  ..⟳.. =>
// +-----0--------------------------------------------------------------> temps
//                      E                    B         A  D          C

// file d'attente de timer (0ms) : callbackLogB
// file d'attente de timer (7ms) :
// file d'attente de timer (499ms) : callbackLogA - callbackLogD
// file d'attente de timer (500ms) : callbackLogD
// file d'attente de timer (501ms) :
// file d'attente de timer (999ms) : callbackLogC
// file d'attente de timer (1000ms) :

// In the loop : https://www.youtube.com/watch?v=cCOL7MC4Pl0
