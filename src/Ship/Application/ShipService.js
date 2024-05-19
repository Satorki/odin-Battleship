import { ShipFactory } from "../Domain/ShipFactory.js";
import ShipRepository from "../Infrastructure/localStorage/ShipRepository.js";

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

    this.#provideShipBehaviours(ship);
  }

  createEnemyShip(shipInput) {
    const ship = this.shipFactory.createByInput(shipInput);
    this.shipRepository.save(ship);
  }

  #provideShipBehaviours(ship) {
    this.#makeRotatable(ship);
    this.#makeChoosable(ship);
  }

  #getShipSelector(ship) {
    return document.querySelector(`#${ship.getName()}`);
  }

  #makeRotatable(ship) {
    const currentShipSelector = this.#getShipSelector(ship);
    currentShipSelector.addEventListener("dblclick", () => {
      currentShipSelector.classList.toggle("flip");
      ship.setIsHorizontal(this.#isShipRotated(ship));
      this.shipRepository.setCurrentSelectedShip(ship);
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

  #makeChoosable(ship) {
    const currentShipSelector = this.#getShipSelector(ship);

    currentShipSelector.addEventListener("click", (e) => {
      this.shipRepository.setCurrentSelectedShip(ship);
      this.#stylize(currentShipSelector);
    });
  }
  #isShipRotated(ship) {
    const currentShipSelector = this.#getShipSelector(ship);
    return currentShipSelector.classList.contains("flip");
  }

  isAllShipsSunk(owner) {
    const ships = this.shipRepository.getShips(owner);
    return ships.every((ship) => ship.sunk);
  }
}

export { ShipService };
