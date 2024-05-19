import { BattleShipController } from "./src/BattleShip/Ui/BattleShipController.js";
import { PlaceShipInput } from "./src/Board/Ui/PlaceShipInput.js";

const battleShipController = new BattleShipController();
battleShipController.prepareBoards();

document.querySelectorAll(".player .grid .square").forEach((element) => {
  element.addEventListener("click", (e) => {
    const placeShipInput = new PlaceShipInput("player", e.target.classList[1]);
    battleShipController.placeShip(placeShipInput);
  });
});

document.querySelector("#reset").addEventListener("click", () => {
  battleShipController.restartGame();
});

document.querySelector("#random").addEventListener("click", () => {
  battleShipController.placePlayerShipsRandomly();
});

document.querySelector("#start").addEventListener("click", () => {
  battleShipController.startGame();
});
