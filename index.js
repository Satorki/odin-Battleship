import { BoardController } from "./src/Board/Ui/BoardController.js";
import { BoardInput } from "./src/Board/Ui/BoardInput.js";
import { ShipController } from "./src/Ship/Ui/ShipController.js";
import { ShipInput } from "./src/Ship/Ui/shipInput.js";

//CREATING SHIPS
const frigate1 = new ShipInput("frigate1", 5);
const frigate2 = new ShipInput("frigate2", 3);
const frigate3 = new ShipInput("frigate3", 2);
const shipController = new ShipController();
shipController.createShip(frigate1);
shipController.createShip(frigate2);
shipController.createShip(frigate3);

//CREATING BOARDS
const playerBoardInput = new BoardInput("player", 10, 10);
const enemyBoardInput = new BoardInput("enemy", 10, 10);
const boardController = new BoardController();
boardController.createBoard(playerBoardInput);
boardController.createBoard(enemyBoardInput);
//oardController.placeShip(frigate1);





// import { ButtonBehaviours } from "./src/buttonBehaviours.js";
// import { Owner } from "./src/owner.js";
// import { Ship } from "./src/Ship/Domain/Ship.js";
// import { Board } from "./src/Board/Domain/Board.js";
// import { ShipBehaviours } from "./src/shipBehaviours.js";
// import { ShipInput } from "./src/Ship/Ui/shipInput.js";

// // BOARD CREATED
// const playerBoard = new Board("player", 10, 10);
// const enemyBoard = new Board("enemy", 10, 10);
// playerBoard.generateDom(".player .grid");
// enemyBoard.generateDom(".enemy .grid");

// // SHIPS CREATED
// const frigate1 = new Ship("frigate1", 1);
// const frigate2 = new Ship("frigate2", 2);
// const frigate3 = new Ship("frigate3", 3);
// const frigate4 = new Ship("frigate4", 4);
// const frigate5 = new Ship("frigate5", 4);
// const frigate6 = new Ship("frigate6", 4);
// frigate1.generateDom();
// frigate2.generateDom();
// frigate3.generateDom();
// frigate4.generateDom();
// frigate5.generateDom();
// frigate6.generateDom();

// // BEHAVIOURS STARTED
// const shipBehaviours = new ShipBehaviours();
// shipBehaviours.rotate();
// shipBehaviours.chooseShip();
// shipBehaviours.choosePlace();

// const buttonBehaviours = new ButtonBehaviours();
// buttonBehaviours.resetPush();
// buttonBehaviours.randomPush();

// // ADDED SHIPS FOR PLAYER and ENEMY
// const player = new Owner(frigate1, frigate2, frigate3, frigate4);
// const enemy = new Owner(frigate1, frigate2, frigate3, frigate4);
