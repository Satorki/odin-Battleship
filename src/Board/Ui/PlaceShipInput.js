class PlaceShipInput {
  constructor(owner, place) {
    this.owner = owner;
    this.place = place;
  }
  getOwner() {
    return this.owner;
  }
  getPlace() {
    return this.place;
  }
}

export { PlaceShipInput };
