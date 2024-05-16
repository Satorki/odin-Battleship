import { ShipService } from "../Application/ShipService.js";

class ShipController {
  constructor() {
    this.shipService = new ShipService();
  }
  createShip(shipInput) {
    this.shipService.generateShipUI(shipInput);
  }
  makeRotatable(shipInput) {
    this.shipService.makeRotatable(shipInput)
  }
  chooseShip() {}
  choosePositionOnPlayground() {}
}

export { ShipController };
