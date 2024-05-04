import { Ship } from "./ship.js";

const fregate3 = Ship(3, "three");
fregate3.create();

function Gameboard() {
  let gameboardArray = [];

  function create(wichGrid) {
    const gridDom = document.querySelector(wichGrid);
    for (let i = 0; i < 100; i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square", i);
      gridDom.appendChild(newSquare);
      newSquare.textContent = i;
      gameboardArray.push(i);
    }
  }

  function shipAdd() {
    const position = fregate3.drop();
    gameboardArray.forEach((gameboardel) => {
      position.forEach((positionel) => {
        if (gameboardel === positionel) {
          gameboardArray.splice(gameboardel, 1, "x");
        }
      });
    });
    const playerGrid = document.querySelector(".player .grid");
    playerGrid.addEventListener("mouseup", showShips);
  }

  function showMiss() {}
  function showHit() {}
  function showShips() {
    const playerGridSquare = document.querySelectorAll(".player .grid .square");
    playerGridSquare.forEach((gridel) => {
      if (!gameboardArray.includes(parseInt(gridel.classList[1]))) {
        gridel.classList.add("fregatePlaced")
      }
    });
  }

  return { create, shipAdd, showShips };
}

export { Gameboard };
