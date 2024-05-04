import { Gameboard } from "./src/gameboard.js";
import { Ship } from "./src/ship.js";

const gameboard = Gameboard();
gameboard.squareGenerator(".player .grid");
gameboard.squareGenerator(".enemy .grid");

const fregate4 = Ship(4, "four");
const fregate3 = Ship(3, "three");
const fregate2 = Ship(2, "two");
const fregate1 = Ship(1, "one");
fregate3.create()
fregate4.create();
fregate2.create();
fregate1.create();

gameboard.addShip("fregate3", fregate3.addToGameboard())
// fregate4.catchShip();
// fregate3.catchShip();
// fregate2.catchShip();
// fregate1.catchShip();
//___________________TESTING____________________//

// function grab(name) {
//   const headGrab = document.querySelector("#" + name);

//   headGrab.addEventListener("click", () => {});
// }





// battlefield 0 - 99

// dodaje statek na pozycje
//  22 32 42

// battlefield 0 - 21 statek 23 - 31 statek 33 - 41 statek 43 - 99