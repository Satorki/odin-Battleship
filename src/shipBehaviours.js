class ShipBehaviours {
  constructor() {
    this.isShipPlaced = false;
    this.isShipRotated = false;
    this.shipLength = null;
    this.shipChoosed = null;
    this.choosedPlaceDom = null;
    this.choosedPlaceNumber = null;
    this.domShipSelector = document.querySelectorAll(".thisShip");
    this.domGridSelector = document.querySelectorAll(".player .grid .square");
  }

  deleteChoosed() {
    this.domShipSelector.forEach((element) => {
      if (element.id === this.shipChoosed) {
        element.remove();
      }
    });
  }

  choosePlace() {
    this.domGridSelector.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.choosedPlaceDom = e.target;
        this.choosedPlaceNumber = e.target.classList[1];
        if (!this.isShipPlaced) {
          this.addToBoard();
          this.isShipPlaced = true;
        }
      });
    });
  }

  createPartDom() {
    const shipPart = document.createElement("div");
    shipPart.classList.add("frigateSquare");
    return shipPart;
  }

  addToBoard() {
    let shipCreated = this.createBodyArray();

    for (let i = 0; i < this.domGridSelector.length; i++) {
      for (let j = 0; j < shipCreated.length; j++) {
        if (parseInt(this.domGridSelector[i].classList[1]) === shipCreated[j]) {
          this.domGridSelector[i].insertAdjacentElement(
            "afterend",
            this.createPartDom()
          );
          this.domGridSelector[i].remove();
          this.deleteChoosed();
        }
      }
    }
  }

  randomize() {
    console.log(this.domShipSelector);

    this.domShipSelector.forEach((element) => {
      let shipPositionRandom = Math.floor(Math.random() * 100);

      this.shipChoosed = element.id;
      this.choosedPlaceNumber = shipPositionRandom;
      this.addToBoard();
    });
  }
}

export { ShipBehaviours };
