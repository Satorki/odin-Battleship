class Ship {
  constructor(name, length) {
    (this.name = name),
      (this.length = length)
  }

  generateDom() {
    const sector = document.querySelector(".shipSector");
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("thisShip");
    shipDiv.id = this.name;
    sector.appendChild(shipDiv);
    const frigate = document.createElement("div");
    frigate.classList.add("frigateSquare", "frigateHead");
    shipDiv.appendChild(frigate);

    for (let i = 1; i < this.length; i++) {
      const frigate = document.createElement("div");
      frigate.classList.add("frigateSquare");
      shipDiv.appendChild(frigate);
    }
  }

  domId(){
    const shipId = document.querySelector("#"+ this.name)
    return shipId
  }

  // add() {
  //   const draggedShip = document.getElementById("#" + this.name);
  //   document.addEventListener("drop", (e) => {
  //     console.log(e.target);
  //     e.target.remove();
  //   });
  // }

}

export { Ship };
