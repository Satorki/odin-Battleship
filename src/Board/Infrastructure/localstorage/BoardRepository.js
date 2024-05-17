class BoardRepository {
  getByOwner(owner) {
    return window.localStorage.getItem(owner);
  }
  save(board) {
    window.localStorage.setItem(board.getOwner(), board);
  }
}

export { BoardRepository };
