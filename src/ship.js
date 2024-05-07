class Ship {
  constructor(name, length) {
    (this.name = name), (this.length = length);
  }
  isRotated(rotate) {
    if (rotate) {
      return true
    } else {
      return false
    }
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
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("thisShip")
    shipDiv.id = this.name
    sector.appendChild(shipDiv);
    const frigate = document.createElement("div");
    frigate.classList.add("frigateSquare","frigateHead");
    shipDiv.appendChild(frigate);


    for (let i = 1; i < this.length; i++) {
      const frigate = document.createElement("div");
      frigate.classList.add("frigateSquare");
      shipDiv.appendChild(frigate);
    }
    
  }
}

export { Ship };
