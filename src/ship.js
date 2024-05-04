function Ship(length, name) {
  const sector = document.querySelector(".shipSector");
  const shipLength = [];

  function create() {
    const separate = document.createElement("div");
    sector.appendChild(separate);
    shipLength.push(0);
    const fregate = document.createElement("div");
    fregate.classList.add("fregateSquare");
    fregate.classList.add("fregateHead");
    fregate.id = name;
    separate.appendChild(fregate);

    for (let i = 1; i < length; i++) {
      shipLength.push(i);
      const fregate = document.createElement("div");
      fregate.classList.add("fregateSquare");
      fregate.id = name;
      separate.appendChild(fregate);
    }
  }
  function addToGameboard() {
    return shipLength;
  }

  return { create, addToGameboard };
}

export { Ship };
