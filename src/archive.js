// function Ship(length, name) {
//   const sector = document.querySelector(".shipSector");
//   const shipArray = [];

//   function create() {
//     const separate = document.createElement("div");
//     sector.appendChild(separate);
//     shipArray.push("x");

//     const fregate = document.createElement("div");
//     fregate.classList.add("fregateSquare");
//     fregate.classList.add("fregateHead");
//     fregate.id = name;
//     separate.appendChild(fregate);

//     for (let i = 1; i < length; i++) {
//       shipArray.push("x");
//       const fregate = document.createElement("div");
//       fregate.classList.add("fregateSquare");
//       separate.appendChild(fregate);
//     }
//   }

//   // function getGameboardArrayFromDom() {
//   //   const squareNumbers = document.querySelectorAll(".player .square");
//   //   const gameboardArrayFromDom = [];
//   //   squareNumbers.forEach((element) => {
//   //     gameboardArrayFromDom.push(element.classList[1]);
//   //   });
//   //   return gameboardArrayFromDom;
//   // }

//   // function grab() {
//   //   const fregateHead = document.querySelector("#" + name);
//   //   const fregateBody = document.createElement("div");
//   //   fregateBody.style.height = shipArray.length * 30 + "px";
//   //   fregateBody.classList.add("fregateSquare", "fregateGrabed");
//   //   const body = document.querySelector(".container");

//   //   fregateHead.addEventListener("click", () => {
//   //     body.appendChild(fregateBody);
//   //   });

//   //   document.addEventListener("mousemove", (e) => {
//   //     let posX = e.clientX;
//   //     let posY = e.clientY;
//   //     fregateBody.style.transform = `translate(${posX}px,${posY}px)`;
//   //   });
//   // }
//   // function rotate() {}

//   // function drop(callback) {
//   //   const dropCoordinates = [];
//   //   const playerGrid = document.querySelector(".player .grid");
//   //   playerGrid.addEventListener("mousedown", (e) => {
//   //     for (let i = 0; i < shipArray.length; i++) {
//   //       dropCoordinates.push(parseInt(e.target.classList[1]) + 10 * i);
//   //     }
//   //     const fregateHead = document.querySelector("#" + name);
//   //     const fregateBody = document.querySelectorAll(".fregateSquare");
//   //     fregateHead.style.display = "none";
//   //     fregateBody.forEach(element  => {
//   //       element.parentNode.removeChild(element);
//   //     });
//   //     const container = document.querySelector(".container");
//   //     const fregateGrabed = document.querySelector(".fregateGrabed");
//   //     container.removeChild(fregateGrabed);

//   //     callback(dropCoordinates);
//   //   });
//   // }

//   return { create };
// }

// export { Ship };

// function Gameboard() {
//   let gameboardArray = [];

//   function create(wichGrid) {
//     const gridDom = document.querySelector(wichGrid);
//     for (let i = 0; i < 100; i++) {
//       let newSquare = document.createElement("div");
//       newSquare.classList.add("square", i);
//       gridDom.appendChild(newSquare);
//       // newSquare.textContent = i;
//       gameboardArray.push(i);
//     }
//   }

//   // function shipAdd(position) {
//   //   gameboardArray.forEach((element) => {
//   //     if (position.includes(element)) {
//   //       gameboardArray.splice(element, 1, "x");
//   //     }
//   //   });
//   //   document.addEventListener("mouseup", showShips);
//   // }

//   // function showMiss() {}
//   // function showHit() {}
//   // function showShips() {
//   //   const playerGridSquare = document.querySelectorAll(".player .grid .square");
//   //   playerGridSquare.forEach((gridel) => {
//   //     if (!gameboardArray.includes(parseInt(gridel.classList[1]))) {
//   //       gridel.classList.add("fregatePlaced");
//   //     }
//   //   });
//   // }

//   return { create };
// }

// export { Gameboard };

// // fregate3.grab();

// // fregate4.drop((coordinates) => {
// //   gameboard.shipAdd(coordinates)
// // });

// // fregate3.drop((coordinates) => {
// //   gameboard.shipAdd(coordinates)
// // });

// //gameboard.create(".enemy .grid");
// // const fregate4 = Ship(4, "four");
// // const fregate3 = Ship(3, "three");
// // const fregate2 = Ship(2, "two");
// // const fregate1 = Ship(1, "one");
// // fregate3.create()
// // fregate4.create();
// // fregate2.create();
// // fregate1.create();

// //___________________TESTING____________________//
