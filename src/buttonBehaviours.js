import { Ship } from "./ship.js";
import { Board } from "./board.js";
import { ShipBehaviours } from "./shipBehaviours.js";

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
const frigate5 = new Ship("frigate5", 4);
const frigate6 = new Ship("frigate6", 4);
frigate1.generateDom();
frigate2.generateDom();
frigate3.generateDom();
frigate4.generateDom();
frigate5.generateDom();
frigate6.generateDom();

// BEHAVIOURS STARTED
const shipBehaviours = new ShipBehaviours();
shipBehaviours.rotate();
shipBehaviours.chooseShip();
shipBehaviours.choosePlace();

class ButtonBehaviours {
  constructor() {
    this.resetButton = document.querySelector("#reset");
    this.randomButton = document.querySelector("#random");
    this.startButton = document.querySelector("#start");
  }
  resetStart() {
    location.reload();
  }

  resetPush() {
    this.resetButton.addEventListener("click", this.resetStart);
  }

  randomStart() {
    shipBehaviours.randomize()
  }

  randomPush() {
    this.randomButton.addEventListener("click", this.randomStart);
  }
}

export { ButtonBehaviours };
