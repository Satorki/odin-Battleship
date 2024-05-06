class Behaviours {
  rotate() {}
  grab() {}
  drop() {
    return new Promise((resolve, reject) => {
      let position;
      const getPos = document.getElementById("pos");
      const getPosBtn = document.getElementById("start");

      getPosBtn.addEventListener("click", () => {
        position = parseInt(getPos.value);
        resolve(position);
      });
    });
  }

  add(ship, board, position) {
    const where = position;
    const howLong = ship.length;
    let body = "";

    for (let i = 0; i < howLong; i++) {
      body += "x";
    }

    board.splice(where, howLong, ...body);

    return board;
  }

  randomize() {}
}

export { Behaviours };
