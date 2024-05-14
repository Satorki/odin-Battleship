// function Ship(length, name) {
//   const sector = document.querySelector(".shipSector");
//   const shipArray = [];

import { Behaviours } from "./behaviours";

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

// drop() {
//     return new Promise((resolve, reject) => {
//       let position;
//       const getPos = document.getElementById("pos");
//       const getPosBtn = document.getElementById("start");

//       getPosBtn.addEventListener("click", () => {
//         position = parseInt(getPos.value);
//         resolve(position);
//       });
//     });
//   }

// const getPosBtn = document.getElementById("start");
// getPosBtn.addEventListener("click", async () => {
//   const position = await boardBehaviour.drop()
//   console.log(boardBehaviour.add(frigate4, playerBoard.generate(), position));
// });

// generate() {
//   const shipBody = [];
//   for (let i = 0; i < this.length; i++) {
//     shipBody.push("x");
//   }
//   return shipBody;
// }

//  Behaviours:

// positionOffset;
// mouseDropPosition;
// shipLength;
// flipped;

// rotate() {
//   const shipBody = document.querySelectorAll(".thisShip");
//   let rotated = false;

//   shipBody.forEach((body) => {
//     body.addEventListener("dblclick", () => {
//       if (body.classList.value === "thisShip flip") {
//         this.rotated = false;
//         body.classList.remove("flip");
//       } else {
//         this.rotated = true;
//         body.classList.add("flip");
//       }
//     });
//   });
// }

// grabDrop() {
//   const playerGrid = document.querySelector(".player .grid");
//   const shipBody = document.querySelectorAll(".thisShip");
//   const shipHead = document.querySelectorAll(".frigateHead");
//   const frigate = document.createElement("div");
//   frigate.classList.add("frigateSquare");

//   const dStart = (event) => {
//     this.shipLength = event.target.childElementCount;
//     this.flipped = event.target.classList[1];
//     event.dataTransfer.setData("offset", event.offsetY);
//     event.dataTransfer.setData("text/plain", event.target.id);
//     // event.dataTransfer.setData("number", event.target.childNodes.length);
//   };

//   shipBody.forEach((ele) => {
//     ele.setAttribute("draggable", "true");
//     ele.addEventListener("dragstart", dStart);
//   });

//   const dOver = (e) => {
//     e.preventDefault();
//   };

//   playerGrid.addEventListener("dragover", dOver);

//   const dropIt = (e) => {
//     e.preventDefault();
//     const grabOffset = e.dataTransfer.getData("offset");
//     const shipId = e.dataTransfer.getData("text/plain");
//     // let shipLength = parseInt(
//     //   e.dataTransfer.getData("number", e.target.childNodes.length)
//     // );
//     const draggedShip = document.getElementById(shipId);
//     e.target.insertAdjacentElement("afterend", draggedShip);
//     draggedShip.remove();
//     // e.target.remove();
//     this.positionOffset = grabOffset;
//     this.mouseDropPosition = e.target.classList[1];
//     this.add();
//   };

//   playerGrid.addEventListener("drop", dropIt);
// }

// add() {
//   const playerGrid = document.querySelectorAll(".player .grid .square");

//   const frigate = document.createElement("div");
//   frigate.classList.add("frigateSquare");

//   playerGrid.forEach((element, index, array) => {
//     let j = index
//     if (element.classList[1] === this.mouseDropPosition) {
//       for (let i = 0; i < this.shipLength; i++) {
//         if (this.flipped) {
//           const frigate = document.createElement("div");
//           frigate.classList.add("frigateSquare");
//           element.insertAdjacentElement("afterend", frigate);
//         } else {
//           const frigate = document.createElement("div");
//           frigate.classList.add("frigateSquare");
//           array[j].insertAdjacentElement("afterend", frigate);
//           console.log(array[j-1]);
//           j = j + 10
//         }
//       }
//       for (let i = 0; i < this.shipLength; i++) {
//         if (this.flipped) {
//           array[index].remove();
//           index++;
//         } else {
//           array[index].remove();
//           index = index + 10;
//         }
//       }
//     }
//   });

//   // console.log(this.mouseDropPosition);
//   // console.log(this.positionOffset);

//   // Take a ship position
//   // delete a dom squares
//   // add a dom squares

//   // const where = position;
//   // const howLong = ship.length;
//   // let body = "";

//   // for (let i = 0; i < howLong; i++) {
//   //   body += "x";
//   // }

//   // board.splice(where, howLong, ...body);
// }
