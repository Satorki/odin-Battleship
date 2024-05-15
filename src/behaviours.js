class Behaviours {
  constructor() {
    this.shipRotate = true;
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
          this.shipRotate = false;
        } else {
          this.shipRotate = true;
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

  shipPartCreate() {
    const shipPart = document.createElement("div");
    shipPart.classList.add("frigateSquare");

    return shipPart;
  }

  addPlayerBoardSquares(shipPlace, shipPart) {
    console.log(shipPlace);
    console.log();

    shipPlace.insertAdjacentElement("afterend", shipPart);
    if (this.shipRotate) {
      for (let i = 0; i < this.shipLength - 1; i++) {
        const clonedShipPart = shipPart.cloneNode(true);
        shipPart.insertAdjacentElement("afterend", clonedShipPart);
      }
    } else {
      for (let i = 0; i < this.shipLength - 1; i++) {
        const clonedShipPart = shipPart.cloneNode(true);
      }
    }
  }
  deletePlayerBoardSquares(shipPart) {
    shipPart.remove();
  }

  addShipToPlayerBoard() {
    this.domPlayerGrid.forEach((element) => {
      element.addEventListener("click", () => {
        this.addPlayerBoardSquares(this.placeForShipChoseDom, this.shipPartCreate());
        this.deletePlayerBoardSquares();
       });
    });
  }
}

export { Behaviours };
