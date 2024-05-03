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
    separate.appendChild(fregate)

    for (let i = 1; i < length; i++) {
      shipLength.push(i);
      const fregate = document.createElement("div");
      fregate.classList.add("fregateSquare");
      fregate.id = name;
      separate.appendChild(fregate);
    }
  }

function catchShip() {
  const selectedHead = document.querySelector("#" + name);
  const selectedBody = document.querySelectorAll("#" + name);
  let offsetX, offsetY;

  selectedHead.addEventListener("click", (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", catchMove);
  });

  selectedHead.addEventListener("click", () => {
    if (selectedHead.classList.value === "fregateSquare fregateHead catched") {
      document.removeEventListener("mousemove", catchMove);
      selectedBody.forEach((element) => {
        element.classList.remove("catched");
      });
    }
  });
  function catchMove(e) {
    const posX = e.clientX - offsetX;
    const posY = e.clientY - offsetY;
    selectedBody.forEach((element, index) => {
      element.classList.add("catched");
      element.style.top = posY + index * 30 + "px";
      element.style.left = posX + "px";
    });
  }
}

  return { create, catchShip };
}

export { Ship };


