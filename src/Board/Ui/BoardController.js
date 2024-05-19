import { BoardService } from "../Application/BoardService.js";
class BoardController {
  constructor(boardService = new BoardService()) {
    this.boardService = boardService;
  }

  createBoards(...boardInputs) {
    boardInputs.forEach((boardInput) => {
      this.createBoard(boardInput);
    });
  }

  createBoard(boardInput) {
    this.boardService.generateBoardUi(boardInput);
  }

  placeShip(placeShipInput) {
    try {
      this.boardService.placeShip(placeShipInput);
    } catch (error) {
      alert(error);
    }
  }

  placePlayerShipsRandomly() {
    try {
      this.boardService.placePlayerShipsRandomly();
    } catch (error) {
      alert(error);
    }
  }

  placeEnemyShipsRandomly() {
    try {
      this.boardService.placeEnemyShipsRandomly();
    } catch (error) {
      alert(error);
    }
  }

  disableBoard(boardInput) {
    this.boardService.disableBoard(boardInput);
  }

  enableBoard(boardInput) {
    this.boardService.enableBoard(boardInput);
  }

  hitTarget(target, owner) {
    try {
      this.boardService.hitTarget(target, owner);
    } catch (error) {
      alert(error);
    }
  }

  hitTargetByEnemy() {
    try {
      this.boardService.hitTargetByEnemy();
    } catch (error) {
      alert(error);
    }
  }
}

export { BoardController };
