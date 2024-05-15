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
          this.shipVertical = false;
        } else {
          element.classList.add("flip");
          this.shipVertical = true;
        }
      });
    });
  }

  stylizeShip(ship) {
    ship.style.boxShadow = "0 0 10px 2px white";
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

  chosePlaceForShip() {
    this.playerGrid.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.placeForShip = e.target.classList[1];
      });
    });
  }

  addShipToPlayerBoard() {
    const choosedShipLength = this.shipLength;
    const choosedPlaceForShip = this.placeForShip;
    const choosedShipVertical = this.shipVertical;

    this.playerGrid.forEach((element) => {});
  }
}

export { Behaviours };
