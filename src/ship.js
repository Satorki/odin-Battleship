function Ship(length, name) {
  const sector = document.querySelector(".shipSector");
  const shipArray = [];

  function create() {
    const separate = document.createElement("div");
    sector.appendChild(separate);
    shipArray.push("x");

    const fregate = document.createElement("div");
    fregate.classList.add("fregateSquare");
    fregate.classList.add("fregateHead");
    fregate.id = name;
    separate.appendChild(fregate);

    for (let i = 1; i < length; i++) {
      shipArray.push("x");
      const fregate = document.createElement("div");
      fregate.classList.add("fregateSquare");
      separate.appendChild(fregate);
    }
  }

  // function getGameboardArrayFromDom() {
  //   const squareNumbers = document.querySelectorAll(".player .square");
  //   const gameboardArrayFromDom = [];
  //   squareNumbers.forEach((element) => {
  //     gameboardArrayFromDom.push(element.classList[1]);
  //   });
  //   return gameboardArrayFromDom;
  // }

  function grab() {
    const fregateHead = document.querySelector("#" + name);
    const fregateBody = document.createElement("div");
    fregateBody.style.height = shipArray.length * 30 + "px";
    fregateBody.classList.add("fregateSquare", "fregateGrabed");
    const body = document.querySelector(".container");

    fregateHead.addEventListener("click", () => {
      body.appendChild(fregateBody);
    });

    document.addEventListener("mousemove", (e) => {
      let posX = e.clientX;
      let posY = e.clientY;
      fregateBody.style.transform = `translate(${posX}px,${posY}px)`;
    });
  }
  function rotate() {}

  function drop(callback) {
    const dropCoordinates = [];
    const playerGrid = document.querySelector(".player .grid");
    playerGrid.addEventListener("mousedown", (e) => {
      for (let i = 0; i < shipArray.length; i++) {
        dropCoordinates.push(parseInt(e.target.classList[1]) + 10 * i);
      }
      const fregateHead = document.querySelector("#" + name);
      const fregateBody = document.querySelectorAll(".fregateSquare");
      fregateHead.style.display = "none";
      fregateBody.forEach(element  => {
        element.parentNode.removeChild(element);
      });
      const container = document.querySelector(".container");
      const fregateGrabed = document.querySelector(".fregateGrabed");
      container.removeChild(fregateGrabed);

      callback(dropCoordinates);
    });
  }

  return { create, drop, grab };
}

export { Ship };
