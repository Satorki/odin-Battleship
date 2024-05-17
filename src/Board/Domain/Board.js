class Board {
  constructor(owner, selector, height, width) {
    this.owner = owner;
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.ground = this.#generateGround();
  }

  #generateGround() {
    const ground = [];
    for (let i = this.width; i <= this.width * this.height; i++) {
      ground.push(i);
    }
    return ground;
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
  getGround() {
    return this.ground;
  }
}

export { Board };
