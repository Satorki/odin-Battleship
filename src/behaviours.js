class Behaviours {
  chose() {
    const ship = document.querySelectorAll(".thisShip");

    ship.forEach((element) => {
      element.addEventListener("click", (e) => {
        const selectedShip = e.target.parentNode;
        selectedShip.style.boxShadow = "0 0 10px 2px white";
        selectedShip.dataset.shipId = selectedShip.id;
        this.add(selectedShip);
      });
    });
  }

  add(ship) {
    const shipLength = ship.childNodes.length;
    const playerGrid = document.querySelectorAll(".player .grid");

    playerGrid.forEach((element, index, array) => {
      element.addEventListener("click", (e) => {
        let j = index;
        for (let i = 0; i < this.shipLength; i++) {
          const frigate = document.createElement("div");
          frigate.classList.add("frigateSquare");
          array[j].insertAdjacentElement("afterend", frigate);
          console.log(array[j - 1]);
          j = j + 10;
        }
        for (let i = 0; i < this.shipLength; i++) {
          array[index].remove();
          index = index + 10;
        }
      });
    });
  }

  // randomize(ships, board) {
  //   const randomPosition = Math.floor(Math.random() * 90);
  //   let position = randomPosition;

  //   ships.forEach((element) => {
  //     this.add(element, board, position * element.length);
  //   });

  //   //console.log(board);
  //   return board;
  // }
}

export { Behaviours };
