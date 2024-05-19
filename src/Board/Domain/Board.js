class Board {
  constructor(owner, selector, height, width) {
    this.owner = owner;
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.board = this.#generateBoard();
    this.length = this.height * this.width - 1;
  }
  #generateBoard() {
    const board = [];
    for (let i = 0; i < this.height; i++) {
      const row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  getOwner() {
    return this.owner;
  }
  getSelector() {
    return this.selector;
  }
  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }
  getBoard() {
    return this.board;
  }
  getLength() {
    return this.length;
  }
}

export { Board };
