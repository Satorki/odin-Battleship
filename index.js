import { Ship } from "./src/ship.js";
import { Board } from "./src/board.js";
import { Behaviours } from "./src/behaviours.js";
import { Owner } from "./src/owner.js";

// BOARD CREATED
const playerBoard = new Board("player", 10, 10);
const enemyBoard = new Board("enemy", 10, 10);
playerBoard.generateDom(".player .grid");
enemyBoard.generateDom(".enemy .grid");

// SHIPS CREATED
const frigate1 = new Ship("frigate1", 1);
const frigate2 = new Ship("frigate2", 2);
const frigate3 = new Ship("frigate3", 3);
const frigate4 = new Ship("frigate4", 4);
frigate1.generateDom();
frigate2.generateDom();
frigate3.generateDom();
frigate4.generateDom();

// BEHAVIOURS STARTED
const behaviours = new Behaviours();
behaviours.choseShip();
behaviours.chosePlaceForShip();
behaviours.rotateShip()

// ADDED SHIPS FOR PLAYER and ENEMY
const player = new Owner(frigate1, frigate2, frigate3, frigate4);
const enemy = new Owner(frigate1, frigate2, frigate3, frigate4);

const playerGrid = document.querySelectorAll(".player .grid .square");

playerGrid.forEach((element) => {
  element.addEventListener("click", () => {
    behaviours.addShipToPlayerBoard();
  });
});
