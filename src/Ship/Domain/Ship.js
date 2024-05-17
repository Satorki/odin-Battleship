class Ship {
  constructor(name, length) {
    (this.name = name), (this.length = length), (this.isChoosed = false);
  }
  getName() {
    return this.name;
  }
  getLength() {
    return this.length;
  }
  isChoosed() {
    return this.isChoosed();
  }
  setChoosed(choosed){
    this.isChoosed = choosed
  }
}

export { Ship };
