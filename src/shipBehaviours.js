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

  rotate() {
    this.domShipSelector.forEach((element) => {
      element.addEventListener("dblclick", () => {
        element.classList.toggle("flip");
        this.isShipRotated = element.classList.contains("flip");
      });
    });
  }

  stylize(ship) {
    ship.classList.add("frigateChoosed");
  }
  unstylize(ship) {
    ship.classList.remove("frigateChoosed");
  }

  chooseShip() {
    this.domShipSelector.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.domShipSelector.forEach((ship) => {
          this.unstylize(ship);
        });
        this.stylize(element);
        this.isShipPlaced = false;
        this.shipChoosed = element.id;
        this.isShipRotated = element.classList.contains("flip");
        this.shipLength = e.target.parentNode.childNodes.length;
      });
    });
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

  createBodyArray() {
    let shipPlacedNumbers = [];
    let shipNumberSwitch = parseInt(this.choosedPlaceNumber);
    if (this.isShipRotated) {
      for (let i = 0; i < this.shipLength; i++) {
        shipPlacedNumbers.push(shipNumberSwitch);
        shipNumberSwitch++;
      }
    } else {
      for (let i = 0; i < this.shipLength; i++) {
        shipPlacedNumbers.push(shipNumberSwitch);
        shipNumberSwitch = shipNumberSwitch + 10;
      }
    }
    return shipPlacedNumbers;
  }

  addToBoard() {
    let shipCreated = this.createBodyArray();

    for (let i = 0; i < this.domGridSelector.length; i++) {
      if (
        this.isShipRotated &&
        10 - (this.choosedPlaceNumber % 10) < shipCreated.length
      ) {
        return alert("Bad position");
      }
      if (shipCreated[i] > 99) {
        return alert("Bad position");
      } else {
        for (let j = 0; j < shipCreated.length; j++) {
          if (
            parseInt(this.domGridSelector[i].classList[1]) === shipCreated[j]
          ) {
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
  }

  randomize() {


    this.domShipSelector.forEach((element) => {
      let shipPositionRandom = Math.floor(Math.random() * 100);

      this.shipChoosed = element.id;
      this.choosedPlaceNumber = shipPositionRandom;
      this.addToBoard();
    });

  }
}

export { ShipBehaviours };
