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
        if (element.classList.value === "thisShip flip") {
          element.classList.remove("flip");
        } else {
          element.classList.add("flip");
        }
        if (element.classList.value === "thisShip flip") {
          this.shipRotate = true;
        } else {
          this.shipRotate = false;
        }
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
    this.domPlayerGrid.forEach((element) => {
      element.addEventListener("click", () => {
        this.shipCreate();
        console.log(this.shipCreate()[0]);
        console.log(element.classList[1]);
      });
    });
  }
}

export { Behaviours };
