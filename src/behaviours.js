class Behaviours {
  dropPosition = 0;

  rotate() {
    const shipBody = document.querySelectorAll(".thisShip");
    let rotated = false;

    shipBody.forEach((body) => {
      body.addEventListener("dblclick", () => {
        if (body.classList.value === "thisShip flip") {
          rotated = false;
          body.classList.remove("flip");
        } else {
          rotated = true;
          body.classList.add("flip");
        }
      });
    });
  }

  grabDrop() {
    const playerGrid = document.querySelector(".player .grid");
    const shipBody = document.querySelectorAll(".thisShip");
    const shipHead = document.querySelectorAll(".frigateHead");

    const dStart = (event) => {
      event.dataTransfer.setData("offset", event.offsetY)
      event.dataTransfer.setData("text/plain", event.target.id);
      // event.dataTransfer.setData("number", event.target.childNodes.length);
    };

    shipBody.forEach((ele) => {
      ele.setAttribute("draggable", "true");
      ele.addEventListener("dragstart", dStart);
    });

    const dOver = (e) => {
      e.preventDefault();
    };

    playerGrid.addEventListener("dragover", dOver);

    const dropIt = (e) => {
      e.preventDefault();
      const grabOffset = e.dataTransfer.getData("offset")
      const shipId = e.dataTransfer.getData("text/plain");
      // let shipLength = parseInt(
      //   e.dataTransfer.getData("number", e.target.childNodes.length)
      // );
      const draggedShip = document.getElementById(shipId);
      e.target.insertAdjacentElement("afterend", draggedShip);
      e.target.remove();
      this.dropPosition = grabOffset
    };

    playerGrid.addEventListener("drop", dropIt);

  }

  add() {
    console.log(this.dropPosition);
    // const where = position;
    // const howLong = ship.length;
    // let body = "";

    // for (let i = 0; i < howLong; i++) {
    //   body += "x";
    // }

    // board.splice(where, howLong, ...body);
  }

  randomize(ships, board) {
    const randomPosition = Math.floor(Math.random() * 90);
    let position = randomPosition;

    ships.forEach((element) => {
      this.add(element, board, position * element.length);
    });

    //console.log(board);
    return board;
  }
}

export { Behaviours };
