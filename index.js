import { squareGenerator } from "./src/gameboard.js";
import { Ship } from "./src/ship.js";

squareGenerator(".player .grid");
squareGenerator(".enemy .grid");

const fregate4 = Ship(4, "four");
const fregate3 = Ship(3, "three");
const fregate2 = Ship(2, "two");
const fregate1 = Ship(1, "one");
fregate4.create();
fregate3.create();
fregate2.create();
fregate1.create();
fregate4.catchShip();
fregate3.catchShip();
fregate2.catchShip();
fregate1.catchShip();
//___________________TESTING____________________//

//console.log(fregate1);
