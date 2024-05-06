import { Ship } from "./src/ship.js";
import { Board } from "./src/board.js";
import { Behaviours } from "./src/behaviours.js";
import { Owner } from "./src/owner.js";

// BOARD CREATED
const playerBoard = new Board("player", 10, 10);
const enemyBoard = new Board("enemy", 10, 10)
playerBoard.generateDom(".player .grid")
enemyBoard.generateDom(".enemy .grid")
// SHIPS CREATED
const fregate1 = new Ship("fregate1", 1);
const fregate2 = new Ship("fregate2", 2);
const fregate3 = new Ship("fregate3", 3);
const fregate4 = new Ship("fregate4", 4);
fregate1.generateDom()
// ADDED SHIPS FOR PLAYER
const player = new Owner(fregate1, fregate2, fregate3, fregate4);
// ADDED SHIPS FOR ENEMY
const enemy = new Owner(fregate1, fregate2, fregate3, fregate4);
// BEHAVIOURS STARTED
const boardBehaviour = new Behaviours();

const getPosBtn = document.getElementById("start");

getPosBtn.addEventListener("click", async () => {
  const position = await boardBehaviour.drop()
  console.log(boardBehaviour.add(fregate4, playerBoard.generate(), position));
});


