class ButtonBehaviours {
  constructor() {
    this.resetButton = document.querySelector("#reset");
    this.randomButton = document.querySelector("#random");
    this.startButton = document.querySelector("#start");
  }
  resetStart() {
    location.reload();
  }
  resetPush() {
    this.resetButton.addEventListener("click", this.resetStart);
  }

  randomStart() {
    this.shipBehaviours.randomize()
  }
  randomPush() {
    this.randomButton.addEventListener("click", this.randomStart);
  }
}

export { ButtonBehaviours };
