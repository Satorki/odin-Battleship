import { BoardController } from "./src/Board/Ui/BoardController.js";
import { BoardInput } from "./src/Board/Ui/BoardInput.js";
import { PlaceShipInput } from "./src/Board/Ui/PlaceShipInput.js";
import { ShipController } from "./src/Ship/Ui/ShipController.js";
import { ShipInput } from "./src/Ship/Ui/ShipInput.js";

//CREATING SHIPS
const frigate1 = new ShipInput("frigate1", 5);
const frigate2 = new ShipInput("frigate2", 3);
const frigate3 = new ShipInput("frigate3", 2);
const shipController = new ShipController();
shipController.createShips(frigate1, frigate2, frigate3);

//CREATING BOARDS
const playerBoardInput = new BoardInput("player", 10, 10);
const enemyBoardInput = new BoardInput("enemy", 10, 10);
const boardController = new BoardController();

boardController.createBoard(playerBoardInput);
boardController.createBoard(enemyBoardInput);

document.querySelectorAll(".player .grid .square").forEach((element) => {
  element.addEventListener("click", (e) => {
    const placeShipInput = new PlaceShipInput(
      "player",
      e.target.classList[1],
      shipController.getChosedShip(),
      shipController.shipIsHorizontal(frigate3)
    );
    boardController.placeShip(placeShipInput);
  });
});
