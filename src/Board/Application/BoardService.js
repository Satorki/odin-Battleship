import { BoardFactory } from "../Domain/BoardFactory.js";

class BoardService {
  constructor() {
    this.boardFactory = new BoardFactory();
  }
  generateBoardUi(boardInput) {
    const board = this.boardFactory.createByInput(boardInput);
    const gridDom = document.querySelector(board.getSelector());
    gridDom.style.gridTemplate = `repeat(${board.getWidth()}, 35px) / repeat(${board.getHeight()}, 35px)`;
    for (let i = 0; i < board.getHeight() * board.getWidth(); i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square", i);
      gridDom.appendChild(newSquare);
      newSquare.textContent = i;
    }
  }
  
}

export { BoardService };
