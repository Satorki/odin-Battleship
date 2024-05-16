import { ShipFactory } from "../Domain/ShipFactory.js";

class ShipService {
  constructor() {
    this.shipFactory = new ShipFactory();
  }
  generateShipUI(shipInput) {
    const ship = this.shipFactory.createByInput(shipInput);
    const sector = document.querySelector(".shipSector");
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("thisShip");
    shipDiv.id = ship.getName();
    sector.appendChild(shipDiv);
    const frigate = document.createElement("div");
    frigate.classList.add("frigateSquare");
    shipDiv.appendChild(frigate);

    for (let i = 1; i < ship.getLength(); i++) {
      const frigate = document.createElement("div");
      frigate.classList.add("frigateSquare");
      shipDiv.appendChild(frigate);
    }

    this.#provideShipBehaviours(shipInput);
  }

  #provideShipBehaviours(shipInput) {
    this.#makeRotatable(shipInput);
    this.#makeChoosable(shipInput);
  }

  #getShipSelectorByInput(shipInput) {
    return document.querySelector(`#${shipInput.getName()}`);
  }

  #makeRotatable(shipInput) {
    const currentShipSelector = this.#getShipSelectorByInput(shipInput);
    currentShipSelector.addEventListener("dblclick", () => {
      currentShipSelector.classList.toggle("flip");
      this.isShipRotated = currentShipSelector.classList.contains("flip");
    });
  }

  #stylize(shipSelector) {
    const otherShips = Array.from(document
      .querySelectorAll(".thisShip"))
      .filter((ship) => ship.id !== shipSelector.id);
    shipSelector.classList.add("frigateChoosed");
    otherShips.forEach((otherShip) => {
      otherShip.classList.remove("frigateChoosed");
    });
  }

  #makeChoosable(shipInput) {
    const currentShipSelector = this.#getShipSelectorByInput(shipInput);

    currentShipSelector.addEventListener("click", (e) => {
      this.#stylize(currentShipSelector);
      // this.isShipPlaced = false;
      // this.shipChoosed = currentShipSelector.id;
    });
  }
  #isShipRotated(shipInput){
    const currentShipSelector = this.#getShipSelectorByInput(shipInput);
    return currentShipSelector.classList.contains("flip");
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

}

export { ShipService };
