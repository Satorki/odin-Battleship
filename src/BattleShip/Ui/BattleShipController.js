import { ShipController } from "../../Ship/Ui/ShipController.js";
import { BoardController } from "../../Board/Ui/BoardController.js";
import { ShipInput } from "../../Ship/Ui/ShipInput.js";
import { BoardInput } from "../../Board/Ui/BoardInput.js";
import { BattleShipService } from "../Application/BattleShipService.js";

class BattleShipController {
  constructor() {
    this.shipController = new ShipController();
    this.boardController = new BoardController();
    this.battleShipService = new BattleShipService();
  }
  prepareBoards() {
    this.#createShips();
    this.#createBoards();
  }

  startGame() {
    const status = this.battleShipService.startGame();
    if (status) {
      this.boardController.placeEnemyShipsRandomly();
      const playerBoardInput = new BoardInput("player", 10, 10);
      const enemyBoardInput = new BoardInput("enemy", 10, 10);
      this.boardController.disableBoard(playerBoardInput);
      this.boardController.enableBoard(enemyBoardInput);
    }
    this.startsRunds();
  }

  startsRunds() {
    document.querySelectorAll(".enemy .grid .square").forEach((element) => {
      element.addEventListener("click", (e) => {
        this.boardController.hitTarget(e.target.classList[1], "enemy");
        this.boardController.hitTargetByEnemy();
        this.#verifyAllShipsSunk();
      });
    });
  }

  #verifyAllShipsSunk() {
    if (this.shipController.isAllShipsSunk("enemy")) {
      this.battleShipService.endGame("player");
    } else if (this.shipController.isAllShipsSunk("player")) {
      this.battleShipService.endGame("enemy");
    }
  }

  restartGame() {
    this.battleShipService.resetGame();
  }

  placeShip(placeShipInput) {
    this.boardController.placeShip(placeShipInput);
  }

  placePlayerShipsRandomly() {
    this.boardController.placePlayerShipsRandomly();
  }

  #createShips() {
    const playerFrigate5 = new ShipInput("player", "playerFrigate5", 5);
    const playerFrigate4 = new ShipInput("player", "playerFrigate4", 4);
    const playerFrigate3 = new ShipInput("player", "playerFrigate3", 3);
    const playerFrigate2 = new ShipInput("player", "playerFrigate2", 2);
    const playerFrigate1 = new ShipInput("player", "playerFrigate1", 1);
    const enemyFrigate5 = new ShipInput("enemy", "enemyFrigate5", 5);
    const enemyFrigate4 = new ShipInput("enemy", "enemyFrigate4", 4);
    const enemyFrigate3 = new ShipInput("enemy", "enemyFrigate3", 3);
    const enemyFrigate2 = new ShipInput("enemy", "enemyFrigate2", 2);
    const enemyFrigate1 = new ShipInput("enemy", "enemyFrigate1", 1);
    this.shipController.createShips(
      playerFrigate5,
      playerFrigate4,
      playerFrigate3,
      playerFrigate2,
      playerFrigate1
    );
    this.shipController.createEnemyShips(
      enemyFrigate5,
      enemyFrigate4,
      enemyFrigate3,
      enemyFrigate2,
      enemyFrigate1
    );
  }

  #createBoards() {
    const playerBoardInput = new BoardInput("player", 10, 10);
    const enemyBoardInput = new BoardInput("enemy", 10, 10);
    this.boardController.createBoards(playerBoardInput, enemyBoardInput);
  }
}

export { BattleShipController };
