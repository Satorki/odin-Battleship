class Board {
  constructor(owner, height, width) {
    this.owner = owner;
    this.height = height;
    this.width = width;
  }

  generateDom(owner) {
    const gridDom = document.querySelector(owner);
    gridDom.style.gridTemplate = `repeat(${this.width}, 35px) / repeat(${this.height}, 35px)`;
    for (let i = 0; i < this.height * this.width; i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square", i);
      gridDom.appendChild(newSquare);
      newSquare.textContent = i;
    }
  }

  // generate() {
  //   const boardParameters = [];
  //   for (let i = 0; i < this.height * this.width; i++) {
  //     boardParameters.push(i);
  //   }
  //   return boardParameters;
  // }
}

export { Board };
