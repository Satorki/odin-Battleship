class ShipRepository {
  getByName(name) {
    return window.localStorage.getItem(name);
  }
  findAll() {
    const ships = [];
    for (let i = 1; i <= 3; i++) {
      ships.push(window.localStorage.getItem(`frigate${i}`));
    }
    return ships;
  }
  save(ship) {
    window.localStorage.setItem(ship.getName(), ship);
  }
}

export { ShipRepository };
