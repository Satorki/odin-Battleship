class Behaviours {
  constructor() {
    this.shipRotate = false;
    this.shipChose = null;
    this.shipLength = null;
    this.placeForShipChoseDom = null;
    this.placeForShipChoseNumber = null;
    this.domShip = document.querySelectorAll(".thisShip");
    this.domPlayerGrid = document.querySelectorAll(".player .grid .square");
  }

  rotateShip() {
    this.domShip.forEach((element) => {
      element.addEventListener("dblclick", () => {
        element.classList.toggle("flip");
        this.shipRotate = element.classList.contains("flip");
      });
    });
  }

  stylizeShip(ship) {
    ship.classList.add("frigateChoosed");
  }
  unstylizeShip(ship) {
    ship.classList.remove("frigateChoosed");
  }

  choseShip() {
    this.domShip.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.domShip.forEach((ship) => {
          this.unstylizeShip(ship);
        });
        this.stylizeShip(element);
        this.shipRotate = element.classList.contains("flip");
        this.shipChose = e.target.parentNode.id;
        this.shipLength = e.target.parentNode.childNodes.length;
      });
    });
  }
  deleteChosedShip() {
    this.domShip.forEach((element) => {
      if (element.id === this.shipChose) {
        element.remove();
      }
    });
  }

  choosePlaceForShip() {
    this.domPlayerGrid.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.placeForShipChoseDom = e.target;
        this.placeForShipChoseNumber = e.target.classList[1];
        this.addShipToPlayerBoard();
      });
    });
  }

  shipDomPartCreate() {
    const shipPart = document.createElement("div");
    shipPart.classList.add("frigateSquare");
    return shipPart;
  }

  shipCreate() {
    let shipPlacedNumbers = [];
    let shipNumberSwitch = parseInt(this.placeForShipChoseNumber);
    if (this.shipRotate) {
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

  addShipToPlayerBoard() {
    const shipCreated = this.shipCreate();

    for (let i = 0; i < this.domPlayerGrid.length; i++) {
      if (
        this.shipRotate &&
        10 - (this.placeForShipChoseNumber % 10) < shipCreated.length
      ) {
        return alert("Bad position");
      }
      if (shipCreated[i] > 99) {
        return alert("Bad position");
      } else {
        for (let j = 0; j < shipCreated.length; j++) {
          if (parseInt(this.domPlayerGrid[i].classList[1]) === shipCreated[j]) {
            this.domPlayerGrid[i].insertAdjacentElement(
              "afterend",
              this.shipDomPartCreate()
            );
            this.domPlayerGrid[i].remove();
            this.deleteChosedShip();
          }
        }
      }
    }
  }
}

export { Behaviours };
