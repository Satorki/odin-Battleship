class ShipRepository {
  getCurrentSelectedShip() {
    return JSON.parse(localStorage.getItem("currentSelectedShip"));
  }

  setCurrentSelectedShip(ship) {
    localStorage.setItem("currentSelectedShip", JSON.stringify(ship));
  }

  getShipByName(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  save(ship) {
    const name = ship.name ? ship.name : ship.getName();
    localStorage.setItem(name, JSON.stringify(ship));
  }

  #getShipsByName(name) {
    const ships = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(name)) {
        ships.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    return ships;
  }

  #getShipNameByOwner(owner) {
    return owner === "player" ? "playerF" : "enemyF";
  }

  getShips(owner) {
    return this.#getShipsByName(this.#getShipNameByOwner(owner));
  }

  getEnemyShips() {
    return this.#getShipsByName("enemyF");
  }

  getPlayerShips() {
    return this.#getShipsByName("playerF");
  }
  placeShip(ship, positions) {
    const name = ship.name ? ship.name : ship.getName();
    const placedShip = this.getShipByName(name);
    placedShip.placed = true;
    placedShip.positions = positions;
    this.save(placedShip);
    if (ship.owner === "player") {
      localStorage.removeItem("currentSelectedShip");
      document.getElementById(name).remove();
    }
  }
}

export default ShipRepository;
