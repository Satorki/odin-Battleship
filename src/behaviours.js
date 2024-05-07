class Behaviours {
  rotate() {
    const shipBody = document.querySelectorAll(".thisShip");

    shipBody.forEach((body) => {
      body.addEventListener("dblclick", () => {
        if (body.classList.value === "thisShip flip") {
          body.classList.remove("flip")
        } else
        body.classList.add("flip");
      });
    });

  }
  grabAndDrop() {
    const playerGrid = document.querySelector(".player .grid");
    const shipBody = document.querySelectorAll(".thisShip");

    function dragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    }

    shipBody.forEach((element) => {
      element.setAttribute("draggable", "true");
      element.addEventListener("dragstart", dragStart);
    });

    const dragOver = (e) => {
      e.preventDefault();
    };

    const dropOver = (e) => {
      e.preventDefault();
      const shipId = e.dataTransfer.getData("text/plain");
      const draggedShip = document.getElementById(shipId);
      playerGrid.appendChild(draggedShip);
    };

    playerGrid.addEventListener("dragover", dragOver);
    playerGrid.addEventListener("drop", dropOver);
  }

  add(ship, board, position) {
    const where = position;
    const howLong = ship.length;
    let body = "";

    for (let i = 0; i < howLong; i++) {
      body += "x";
    }

    board.splice(where, howLong, ...body);
    console.log(board);
    return board;
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
