import { Ship } from "./Ship.js";

class ShipFactory {
  createByInput(shipInput) {
    return new Ship(
      shipInput.getOwner(),
      shipInput.getName(),
      shipInput.getLength()
    );
  }
}

export { ShipFactory };
