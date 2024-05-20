import { BoardFactory } from "../Domain/BoardFactory.js";
import BoardRepository from "../Infrastructure/localStorage/BoardRepository.js";

class BoardService {
  constructor() {
    this.boardFactory = new BoardFactory();
    this.boardRepository = new BoardRepository();
  }

  generateBoardUi(boardInput) {
    const board = this.boardFactory.createByInput(boardInput);
    const gridDom = document.querySelector(board.getSelector());
    gridDom.style.gridTemplate = `repeat(${board.getWidth()}, 35px) / repeat(${board.getHeight()}, 35px)`;
    for (let i = 0; i < board.getHeight() * board.getWidth(); i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square", i);
      gridDom.appendChild(newSquare);
    }
    this.boardRepository.save(board);
  }

  #provideRowColumn(place, playerBoardData) {
    return [
      Math.floor(place / playerBoardData.width),
      place % playerBoardData.width,
    ];
  }

  placeShip(placeShipInput) {
    const ship = this.boardRepository.getCurrentSelectedShip();
    const playerBoardData = this.boardRepository.getPlayerBoardData(
      placeShipInput.getOwner()
    );
    const place = placeShipInput.getPlace();
    this.#canPlaceShip(place, ship, playerBoardData);

    this.#addShipToBoard(ship, playerBoardData, place);
  }

  #addShipToBoard(ship, playerBoardData, place) {
    const [rowNumber, columnNumber] = this.#provideRowColumn(
      place,
      playerBoardData
    );
    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        playerBoardData.board[rowNumber][columnNumber + i] = "x";
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        playerBoardData.board[rowNumber + i][columnNumber] = "x";
      }
    }
    this.boardRepository.save(playerBoardData);

    this.#placeShipPositions(ship, playerBoardData, place);
    if (playerBoardData.owner === "player") {
      this.#addShipToBoardUi(ship, playerBoardData, place);
    }
  }

  #placeShipPositions(ship, playerBoardData, place) {
    const positions = [];
    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        positions.push(Number(place) + i);
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        positions.push(Number(place) + i * playerBoardData.width);
      }
    }
    this.boardRepository.placeShip(ship, positions);
  }

  #addShipToBoardUi(ship, playerBoardData, place) {
    const gridDom = document.querySelector(playerBoardData.selector);
    const squares = gridDom.querySelectorAll(".square");
    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        squares[Number(place) + i].classList.add("ship");
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        squares[Number(place) + i * playerBoardData.width].classList.add(
          "ship"
        );
      }
    }
  }

  #canPlaceShip(place, ship, playerBoardData) {
    if (!ship) {
      throw new Error("No ship selected.");
    }
    if (!playerBoardData) {
      throw new Error("No board found.");
    }
    if (place < 0) {
      throw new Error("Invalid position.");
    }
    if (place > playerBoardData.length) {
      throw new Error("Invalid position.");
    }
    this.#verifyShipExistOnBoard(ship, playerBoardData, Number(place));
    if (ship.isHorizontal) {
      if (
        (Number(place) % playerBoardData.width) + ship.length >
        playerBoardData.width
      ) {
        throw new Error("Invalid position.");
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (
          Number(place) + i * playerBoardData.width >
          playerBoardData.length
        ) {
          throw new Error("Invalid position.");
        }
      }
    }
    const [rowNumber, columnNumber] = this.#provideRowColumn(
      place,
      playerBoardData
    );
    if (playerBoardData.board[rowNumber][columnNumber] === "x") {
      throw new Error("There is already a ship in this position.");
    }
  }

  #verifyShipExistOnBoard(ship, playerBoardData, place) {
    const [rowNumber, columnNumber] = this.#provideRowColumn(
      place,
      playerBoardData
    );
    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        if(playerBoardData.board[rowNumber][columnNumber + i] === 'x') {
          throw new Error("You cannot put ship on another ship!");
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if( playerBoardData.board[rowNumber + i][columnNumber] === 'x'){
          throw new Error("You cannot put ship on another ship!");
        }
        // playerBoardData.board[rowNumber + i][columnNumber] = "x";
      }
    }
  }

  #placeSipsRandomly(ships, owner) {
    const playerBoardData = this.boardRepository.getPlayerBoardData(owner);
    ships.forEach((ship) => {
      let randomPlace = Math.floor(Math.random() * playerBoardData.length);
      while (true) {
        try {
          this.#canPlaceShip(randomPlace, ship, playerBoardData);
          this.#addShipToBoard(ship, playerBoardData, randomPlace);
          break;
        } catch (error) {
          randomPlace = Math.floor(Math.random() * playerBoardData.length);
        }
      }
    });
  }

  #canPlaceShipRandomly() {
    const ships = this.boardRepository.getPlayerShips();
    if (ships.filter((ship) => ship.placed === true).length > 0) {
      throw new Error("Can't place ships randomly.");
    }
  }

  placePlayerShipsRandomly() {
    this.#canPlaceShipRandomly();
    let ships = this.boardRepository.getPlayerShips();
    ships = this.#randomizeShips(ships);
    this.#placeSipsRandomly(ships, "player");
  }

  #randomizeShips(ships) {
    ships.forEach((ship) => {
      ship.isHorizontal = Math.random() < 0.5;
    });
    return ships;
  }

  placeEnemyShipsRandomly() {
    let ships = this.boardRepository.getEnemyShips();
    ships = this.#randomizeShips(ships);
    this.#placeSipsRandomly(ships, "enemy");
  }

  disableBoard(boardInput) {
    const board = this.boardRepository.getPlayerBoardData(boardInput.owner);
    const gridDom = document.querySelector(board.selector);
    const squares = gridDom.querySelectorAll(".square");
    squares.forEach((square) => {
      square.classList.add("disabled");
    });
  }

  enableBoard(boardInput) {
    const board = this.boardRepository.getPlayerBoardData(boardInput.owner);
    const gridDom = document.querySelector(board.selector);
    const squares = gridDom.querySelectorAll(".square");
    squares.forEach((square) => {
      square.classList.add("enabled");
    });
  }

  hitTarget(target, owner) {
    const playerBoardData = this.boardRepository.getPlayerBoardData(owner);
    const place = Number(target);
    const [rowNumber, columnNumber] = this.#provideRowColumn(
      place,
      playerBoardData
    );
    let hittedSquare = playerBoardData.board[rowNumber][columnNumber];
    if (hittedSquare === "x") {
      hittedSquare = "h";
    } else {
      hittedSquare = "m";
    }
    this.#hitTargetUi(playerBoardData, place, hittedSquare);
    this.#hitShip(place, owner);
    this.boardRepository.save(playerBoardData);
  }

  #hitShip(place, owner) {
    const ships = this.boardRepository.getShipsByOwner(owner);
    ships.forEach((ship) => {
      let hitted = ship.hitted;
      if (ship.positions.includes(place)) {
        hitted++;
        ship.hitted = hitted;
        if (ship.hitted === ship.length) {
          ship.sunk = true;
          this.#sunkShipUi(ship, owner);
        }

        this.boardRepository.saveShip(ship);
      }
    });
  }

  #sunkShipUi(ship, owner) {
    const playerBoardData = this.boardRepository.getPlayerBoardData(owner);
    const gridDom = document.querySelector(playerBoardData.selector);
    const squares = gridDom.querySelectorAll(".square");
    ship.positions.forEach((position) => {
      squares[position].classList.add("sunk");
    });
  }

  #hitTargetUi(playerBoardData, place, hittedSquare) {
    const gridDom = document.querySelector(playerBoardData.selector);
    const squares = gridDom.querySelectorAll(".square");
    if (hittedSquare === "h") {
      squares[place].classList.add("hit");
    } else {
      squares[place].classList.add("miss");
    }
  }

  hitTargetByEnemy() {
    const playerBoardData = this.boardRepository.getPlayerBoardData("player");
    let randomPlace = Math.floor(Math.random() * playerBoardData.length);
    this.hitTarget(randomPlace, "player");
  }
}

export { BoardService };
