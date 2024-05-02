function squareGenerator(wichGrid) {
  const grid = document.querySelector(wichGrid);
  for (let i = 0; i < 100; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    grid.appendChild(newSquare);
  }
}

export { squareGenerator };
