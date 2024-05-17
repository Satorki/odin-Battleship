import { BoardFactory } from "../Domain/BoardFactory.js";
import { BoardRepository } from "../Infrastructure/localstorage/BoardRepository.js";

class BoardService {
  constructor() {
    this.boardFactory = new BoardFactory();
    this.boardReopository = new BoardRepository();
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
    this.boardReopository.save(board);
  }

  addShipToBoardUi(placeShipInput) {
    if (!this.#canAddShipToBoard(placeShipInput)) {
      throw new Error("can`t add ship in this place to board");
    }
    // document.querySelectorAll(".player .grid .square").forEach((element) => {
    //   element.addEventListener("click", (e) => {
    //     console.log(e.target);
    //     // this.addToBoard();
    //   });
    // });
  }

  #canAddShipToBoard(placeShipInput) {
    const board = this.boardReopository.getByOwner(placeShipInput.getOwner());

    console.log(placeShipInput.isHorizontal());

    if (
      placeShipInput.isHorizontal()
      //&&
      // board.getWidth() - (placeShipInput.getPlace() % board.getWidth()) <
      //   placeShipInput.getLenght()
    ) {
      return false;
    }
    // if (
    //   board.getHeight() - (placeShipInput.getPlace() % board.getHeight()) <
    //   placeShipInput.getLenght()
    // ) {
    //   return false;
    // }
  }
}

export { BoardService };
