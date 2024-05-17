import { Board } from "./Board.js";

class BoardFactory {
  #getSelectorByOwner(owner) {
    switch (owner) {
      case "player":
        return ".player .grid";
      case "enemy":
        return ".enemy .grid";
      default:
        return null;
    }
  }
  createByInput(boardInput) {
    const selector = this.#getSelectorByOwner(boardInput.getOwner());
    if (null === selector) {
      console.log("Invalid owner!");
    }
    return new Board(
      boardInput.getOwner(),
      selector,
      boardInput.getHeight(),
      boardInput.getWidth()
    );
  }
}

export { BoardFactory };
