import { Gameboard } from "./gameboard.js";

function Ship(length, name) {
  const sector = document.querySelector(".shipSector");
  const shipLength = [];

  function create() {
    const separate = document.createElement("div");
    sector.appendChild(separate);
    shipLength.push("x");
    const fregate = document.createElement("div");
    fregate.classList.add("fregateSquare");
    fregate.classList.add("fregateHead");
    fregate.id = name;
    separate.appendChild(fregate);

    for (let i = 1; i < length; i++) {
      shipLength.push("x");
      const fregate = document.createElement("div");
      fregate.classList.add("fregateSquare");
      fregate.id = name;
      separate.appendChild(fregate);
    }
  }
  function grab() {}
  function rotate() {}
  function drop() {
    return [1, 11, 21];
  }

  return { create, drop };
}

export { Ship };
