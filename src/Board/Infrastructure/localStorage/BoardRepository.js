import ShipRepository from "../../../Ship/Infrastructure/localStorage/ShipRepository.js";

class BoardRepository {
  constructor() {
    this.shipRepository = new ShipRepository();
  }

  getCurrentSelectedShip() {
    return this.shipRepository.getCurrentSelectedShip();
  }

  save(board) {
    const owner = board.owner ? board.owner : board.getOwner();
    window.localStorage.setItem(owner, JSON.stringify(board));
  }

  saveShip(ship) {
    this.shipRepository.save(ship);
  }

  getPlayerBoardData(owner) {
    return JSON.parse(window.localStorage.getItem(owner));
  }

  placeShip(ship, positions) {
    this.shipRepository.placeShip(ship, positions);
  }

  getPlayerShips() {
    return this.shipRepository.getPlayerShips();
  }

  getEnemyShips() {
    return this.shipRepository.getEnemyShips();
  }

  getShipsByOwner(owner) {
    return this.shipRepository.getShips(owner);
  }
}

export default BoardRepository;
