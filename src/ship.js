class Ship {
  constructor(name, length) {
    (this.name = name), (this.length = length);
  }
  generate() {
    const shipBody = [];
    for (let i = 0; i < this.length; i++) {
      shipBody.push("x");
    }
    return shipBody;
  }
  generateDom() {
    const sector = document.querySelector(".shipSector");
    const separate = document.createElement("div");
    sector.appendChild(separate);

    for (let i = 0; i < this.length; i++) {
      const fregate = document.createElement("div");
      fregate.classList.add("fregateSquare");
      separate.appendChild(fregate);
    }
    
  }
}

export { Ship };
