import { BattleShipRepository } from "../Infrastructure/localStorage/BattleShipRepository.js";

class BattleShipService {
  constructor() {
    this.battleShipRepository = new BattleShipRepository();
  }

  resetGame() {
    this.battleShipRepository.resetGame();
    window.location.reload();
  }

  endGame(winner) {
    alert(`Game Over! ${winner} won!`);
    this.resetGame();
  }

  startGame() {
    if (!this.battleShipRepository.isPlayerShipsPlaced()) {
      alert("Please place all ships before starting the game");
      return false;
    }
    const startBtn = document.querySelector("#start");
    startBtn.disabled = true;

    return true;
  }
}

export { BattleShipService };
