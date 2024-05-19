class Ship {
  constructor(
    owner,
    name,
    length,
    isHorizontal = false,
    placed = false,
    hitted = 0,
    sunk = false
  ) {
    this.owner = owner;
    this.name = name;
    this.length = length;
    this.isHorizontal = isHorizontal;
    this.placed = placed;
    this.hitted = hitted;
    this.positions = [];
    this.sunk = sunk;
  }
  getOwner() {
    return this.owner;
  }

  getName() {
    return this.name;
  }
  getLength() {
    return this.length;
  }

  setIsHorizontal(isHorizontal) {
    this.isHorizontal = isHorizontal;
  }

  isHorizontal() {
    return this.isHorizontal;
  }
  getPlaced() {
    return this.placed;
  }
  getPositions() {
    return this.positions;
  }

  setPositions(positions) {
    this.positions = positions;
  }
  setSunk(sunk) {
    this.sunk = sunk;
  }
  getSunk() {
    return this.sunk;
  }
}

export { Ship };
