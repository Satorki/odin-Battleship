class PlaceShipInput {
  constructor(owner, place, length, isHorizontal) {
    this.owner = owner;
    this.place = place;
    this.lenght = length;
    this.isHorizontal = isHorizontal;
  }
  getOwner() {
    return this.owner;
  }

  getPlace() {
    return this.place;
  }

  getLength() {
    return this.lenght;
  }

  isHorizontal() {
    return this.isHorizontal;
  }
}

export { PlaceShipInput };
