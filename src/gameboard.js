function Gameboard() {
  let gameboardArray = [];

  function create(wichGrid) {
    const gridDom = document.querySelector(wichGrid);
    for (let i = 0; i < 100; i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square", i);
      gridDom.appendChild(newSquare);
      // newSquare.textContent = i;
      gameboardArray.push(i);
    }
  }

  function shipAdd(position) {
    gameboardArray.forEach((element) => {
      if (position.includes(element)) {
        gameboardArray.splice(element, 1, "x");
      }
    });
    document.addEventListener("mouseup", showShips);
  }

  function showMiss() {}
  function showHit() {}
  function showShips() {
    const playerGridSquare = document.querySelectorAll(".player .grid .square");
    playerGridSquare.forEach((gridel) => {
      if (!gameboardArray.includes(parseInt(gridel.classList[1]))) {
        gridel.classList.add("fregatePlaced");
      }
    });
  }

  return { create, shipAdd, showShips };
}

export { Gameboard };
