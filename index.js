import { Gameboard } from "./src/gameboard.js";
import { Ship } from "./src/ship.js";

const gameboard = Gameboard();
gameboard.create(".player .grid");

const fregate4 = Ship(4, "four");
fregate4.create();
fregate4.grab();
const fregate3 = Ship(3, "three");
fregate3.create();
fregate3.grab();

fregate4.drop((coordinates) => {
  gameboard.shipAdd(coordinates)
});

// fregate3.drop((coordinates) => {
//   gameboard.shipAdd(coordinates)
// });

//gameboard.create(".enemy .grid");
// const fregate4 = Ship(4, "four");
// const fregate3 = Ship(3, "three");
// const fregate2 = Ship(2, "two");
// const fregate1 = Ship(1, "one");
// fregate3.create()
// fregate4.create();
// fregate2.create();
// fregate1.create();

//___________________TESTING____________________//
