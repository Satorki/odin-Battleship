import BoardRepository from "../../../Board/Infrastructure/localStorage/BoardRepository.js";
import ShipRepository from "../../../Ship/Infrastructure/localStorage/ShipRepository.js";

class BattleShipRepository {
  constructor() {
    this.shipRepository = new ShipRepository();
    this.boardRepository = new BoardRepository();
  }
  resetGame() {
    localStorage.clear();
  }

  isPlayerShipsPlaced() {
    return (
      this.shipRepository
        .getPlayerShips()
        .filter((ship) => ship.placed === false).length === 0
    );
  }

  // #getShipPositions(ship, playerBoardData, place) {

  // hitShip(owner, position) {
  //   const playerShips = this.shipRepository.getPlayerShips();
  //   const playerBoardData = this.boardRepository.getPlayerBoardData(owner);

  //   const ship = ships.find((ship) =>
  //     ship.positions.find(
  //       (position) => position.row === rowNumber && position.column === columnNumber
  //     )
  //   );
  //   if (ship) {
  //     ship.hitted++;
  //     if (ship.hitted === ship.length) {
  //       ship.positions.forEach((position) => {
  //         enemyBoardData.board[position.row][position.column] = "h";
  //       });
  //       this.savePlayerBoardData(owner, enemyBoardData);
  //       return "sunk";
  //     } else {
  //       enemyBoardData.board[rowNumber][columnNumber] = "h";
  //       this.savePlayerBoardData(owner, enemyBoardData);
  //       return "hit";
  //     }
  //   } else {
  //     enemyBoardData.board[rowNumber][columnNumber] = "m";
  //     this.savePlayerBoardData(owner, enemyBoardData);
  //     return "miss";
  //   }
  // }

  saveGame(game) {
    // todo future improvement
  }

  loadGame() {
    // todo future improvement
  }
}
export { BattleShipRepository };
