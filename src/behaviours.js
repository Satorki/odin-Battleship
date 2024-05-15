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
    ship.style.boxShadow = "0 0 10px 2px white";
  }
  unstylizeShip(ship) {
    ship.style.boxShadow = "none";
  }

  choseShip() {
    this.domShip.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.shipRotate = element.classList.contains("flip");
        this.stylizeShip(element);
        this.shipChose = e.target.parentNode.id;
        this.shipLength = e.target.parentNode.childNodes.length;
      });
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
      if (shipCreated[i] > 99) {
        return alert("Bad position");
      } else {
        for (let j = 0; j < shipCreated.length; j++) {
          if (parseInt(this.domPlayerGrid[i].classList[1]) === shipCreated[j]) {
            console.log(this.domPlayerGrid[i].classList[1]);
            this.domPlayerGrid[i].insertAdjacentElement(
              "afterend",
              this.shipDomPartCreate()
            );
            this.domPlayerGrid[i].remove();
          }
        }
      }
    }
  }
}

export { Behaviours };
