class Ship {
  constructor(name, length) {
    (this.name = name),
      (this.length = length)
  }
  getName(){
    return this.name
  }
  getLength(){
    return this.length
  }
  
}

export { Ship };
