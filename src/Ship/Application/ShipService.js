import { ShipFactory } from "../Domain/ShipFactory.js";
import { ShipRepository } from "../Infrastructure/localstorage/ShipRepository.js";

class ShipService {
  constructor() {
    this.shipFactory = new ShipFactory();
    this.shipRepository = new ShipRepository();
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
    this.shipRepository.save(ship);
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
    });
  }

  #stylize(shipSelector) {
    const otherShips = Array.from(
      document.querySelectorAll(".thisShip")
    ).filter((ship) => ship.id !== shipSelector.id);
    shipSelector.classList.add("frigateChoosed");
    otherShips.forEach((otherShip) => {
      otherShip.classList.remove("frigateChoosed");
    });
  }

  #makeChoosable(shipInput) {
    const currentShipSelector = this.#getShipSelectorByInput(shipInput);

    currentShipSelector.addEventListener("click", () => {
      this.#stylize(currentShipSelector);
      this.#setActualChoosed(shipInput);
    });
  }
  shipIsHorizontal(shipInput) {
    const currentShipSelector = this.#getShipSelectorByInput(shipInput);
    return currentShipSelector.classList.contains("flip");
  }

  getChosedShip() {
    return this.#getActualChoosed();
  }

  #setActualChoosed(shipInput) {
    const ships = this.shipRepository.findAll();
    this.shipRepository.save(shipInput);
    //ships.filter((ship) => ship.isChoosed() = true)
  }

  #getActualChoosed() {
    const ships = this.shipRepository.findAll();
    console.log(ships);
    return ships.filter((ship) => ship.isChoosed());
  }
}

export { ShipService };
