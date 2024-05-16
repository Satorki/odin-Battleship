class BoardInput {
  constructor(owner, height, width) {
    this.owner = owner;
    this.height = height;
    this.width = width;
  }
  getOwner() {
    return this.owner;
  }
  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }
}

export { BoardInput };
