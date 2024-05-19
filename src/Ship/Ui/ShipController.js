import { ShipService } from "../Application/ShipService.js";

class ShipController {
  constructor(shipService = new ShipService()) {
    this.shipService = shipService;
  }
  createShips(...shipInputs) {
    shipInputs.forEach((shipInput) => {
      this.createShip(shipInput);
    });
  }

  createEnemyShips(...shipInputs) {
    shipInputs.forEach((shipInput) => {
      this.createEnemyShip(shipInput);
    });
  }

  createEnemyShip(shipInput) {
    this.shipService.createEnemyShip(shipInput);
  }

  createShip(shipInput) {
    this.shipService.generateShipUI(shipInput);
  }

  isAllShipsSunk(owner) {
    return this.shipService.isAllShipsSunk(owner);
  }
}

export { ShipController };
