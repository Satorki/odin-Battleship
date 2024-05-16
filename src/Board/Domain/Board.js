class Board {
  constructor(selector, height, width) {
    this.selector = selector;
    this.height = height;
    this.width = width;
  }
  getSelector(){
    return this.selector
  }
  getHeight(){
    return this.height
  }
  getWidth(){
    return this.width
  }
}

export { Board };
