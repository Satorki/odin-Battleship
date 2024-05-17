import { BoardService } from "../Application/BoardService.js";

class BoardController {
  constructor() {
    this.boardService = new BoardService();
  }

  createBoard(boardInput) {
    this.boardService.generateBoardUi(boardInput);
  }

  placeShip(placeShipInput) {
    try {
      this.boardService.addShipToBoardUi(placeShipInput);
    } catch (error) {
      alert(error);
    }
  }
}

export { BoardController };
