import { BoardService } from "../Application/BoardService.js";

class BoardController {
  constructor() {
    this.boardService = new BoardService();
  }

  createBoard(boardInput) {
    this.boardService.generateBoardUi(boardInput);
  }
}

export { BoardController };
