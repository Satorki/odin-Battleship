import { ShipService } from "../Application/ShipService.js";

class ShipController {
  constructor() {
    this.shipService = new ShipService();
  }
  createShips(...shipInputs) {
    shipInputs.forEach((shipInput) => {
      this.createShip(shipInput);
    });
  }
  createShip(shipInput) {
    this.shipService.generateShipUI(shipInput);
  }
  
  shipIsHorizontal(shipInput){
    return this.shipService.shipIsHorizontal(shipInput)
  }

  getChosedShip() {
    return this.shipService.getChosedShip()
  }
}

export { ShipController };
