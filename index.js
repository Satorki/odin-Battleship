import { Gameboard } from "./src/gameboard.js";
import { Ship } from "./src/ship.js";

const gameboard = Gameboard();
gameboard.create(".player .grid");
//gameboard.create(".enemy .grid");
gameboard.shipAdd()

// const fregate4 = Ship(4, "four");
// const fregate3 = Ship(3, "three");
// const fregate2 = Ship(2, "two");
// const fregate1 = Ship(1, "one");
// fregate3.create()
// fregate4.create();
// fregate2.create();
// fregate1.create();

//___________________TESTING____________________//
