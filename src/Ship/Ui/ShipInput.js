class ShipInput {
  constructor(owner, name, length) {
    this.owner = owner;
    this.name = name;
    this.length = length;
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
}

export { ShipInput };
