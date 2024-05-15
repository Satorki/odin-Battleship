class Behaviours {
  constructor() {
    this.shipVertical = true;
    this.selectedShip = null;
    this.shipLength = null;
    this.placeForShip = null;
    this.shipsDom = document.querySelectorAll(".thisShip");
    this.playerGrid = document.querySelectorAll(".player .grid .square");
  }

  rotateShip() {
    this.shipsDom.forEach((element) => {
      element.addEventListener("dblclick", () => {
        if (element.classList.value === "thisShip flip") {
          element.classList.remove("flip");
        } else {
          element.classList.add("flip");
        }
        if (element.classList.value === "thisShip flip") {
          this.shipVertical = false;
        } else {
          this.shipVertical = true;
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
    this.shipsDom.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.stylizeShip(element);
        this.selectedShip = e.target.parentNode.id;
        this.shipLength = e.target.parentNode.childNodes.length;
      });
    });
  }

  choosePlaceForShip() {
    this.playerGrid.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.placeForShip = e.target
      });
    });
  }

  shipPartCreate() {
    const shipPart = document.createElement("div");
    shipPart.classList.add("frigateSquare");

    return shipPart;
  }

  addPlayerBoardSquares(shipPlace, shipPart) {
    shipPlace.insertAdjacentElement("afterend", shipPart);
  }
  deletePlayerBoardSquares(shipPart) {
    shipPart.remove();
  }

  addShipToPlayerBoard() {
    const choosedShipLength = this.shipLength;
    const choosedShipVertical = this.shipVertical;

    this.playerGrid.forEach((element) => {
      element.addEventListener("click", () => {
        console.log(this.placeForShip);
        this.addPlayerBoardSquares(this.placeForShip, this.shipPartCreate());
        this.deletePlayerBoardSquares(this.placeForShip)
      });
    });
  }
}

export { Behaviours };
