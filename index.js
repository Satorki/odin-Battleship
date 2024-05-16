//import { Ship } from "./src/ship.js";
//import { Board } from "./src/board.js";
//import { ShipBehaviours } from "./src/shipBehaviours.js";
import { ButtonBehaviours } from "./src/buttonBehaviours.js";
import { Owner } from "./src/owner.js";


const buttonBehaviours = new ButtonBehaviours();
buttonBehaviours.resetPush();
buttonBehaviours.randomPush();

// ADDED SHIPS FOR PLAYER and ENEMY
const player = new Owner(frigate1, frigate2, frigate3, frigate4);
const enemy = new Owner(frigate1, frigate2, frigate3, frigate4);
