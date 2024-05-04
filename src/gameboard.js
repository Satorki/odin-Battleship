function Gameboard() {
  let gridOperational = [];
  function squareGenerator(wichGrid) {
    const gridDom = document.querySelector(wichGrid);
    for (let i = 0; i < 100; i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      gridDom.appendChild(newSquare);
      newSquare.textContent = i;
      gridOperational.push(i);
    }
  }
  function addShip(name,param) {
    const position = param;
    gridOperational.forEach((element) => {
      if (element === position[0]) {
        element = name
      }
    });
    console.table(gridOperational);
  }

  return { squareGenerator, addShip };
}

export { Gameboard };
