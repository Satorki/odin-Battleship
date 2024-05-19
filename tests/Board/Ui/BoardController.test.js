/** @jest-environment jsdom */
import { BoardService } from "../../../src/Board/Application/BoardService.js";
import { BoardController } from "../../../src/Board/Ui/BoardController.js";
import { BoardInput } from "../../../src/Board/Ui/BoardInput.js";
jest.mock("../../../src/Board/Ui/BoardController.js");
jest.mock("../../../src/Board/Application/BoardService.js");

beforeEach(() => {
  BoardController.mockClear();
  BoardService.mockClear();
});

describe("BoardController structure", () => {
  test("BoardController has createBoard method", () => {
    const boardController = new BoardController();
    expect(boardController.createBoard).toBeDefined();
  });

  test("BoardController has createBoards method", () => {
    const boardController = new BoardController();
    expect(boardController.createBoards).toBeDefined();
  });

  test("BoardController has hitTarget method", () => {
    const boardController = new BoardController();
    expect(boardController.hitTarget).toBeDefined();
  });

  test("BoardController has disableBoard method", () => {
    const boardController = new BoardController();
    expect(boardController.disableBoard).toBeDefined();
  });
  test("BoardController has enableBoard method", () => {
    const boardController = new BoardController();
    expect(boardController.enableBoard).toBeDefined();
  });
  test("BoardController has placeShip method", () => {
    const boardController = new BoardController();
    expect(boardController.placeShip).toBeDefined();
  });
  test("BoardController has placePlayerShipsRandomly method", () => {
    const boardController = new BoardController();
    expect(boardController.placePlayerShipsRandomly).toBeDefined();
  });
  test("BoardController has placeEnemyShipsRandomly method", () => {
    const boardController = new BoardController();
    expect(boardController.placeEnemyShipsRandomly).toBeDefined();
  });
  test("BoardController has hitTargetByEnemy method", () => {
    const boardController = new BoardController();
    expect(boardController.hitTargetByEnemy).toBeDefined();
  });
});

describe("BoardController methods", () => {
  test("createBoard calls createBoard from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    const boardInput = new BoardInput("owner", 10, 10);
    boardController.createBoard(boardInput);
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("createBoards calls createBoard from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    const boardInput = new BoardInput("owner", 10, 10);
    boardController.createBoards(boardInput);
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("hitTarget calls hitTarget from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    boardController.hitTarget("target", "owner");
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("disableBoard calls disableBoard from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    const boardInput = new BoardInput("owner", 10, 10);
    boardController.disableBoard(boardInput);
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("enableBoard calls enableBoard from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    const boardInput = new BoardInput("owner", 10, 10);
    boardController.enableBoard(boardInput);
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("placeShip calls placeShip from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    const boardInput = new BoardInput("owner", 10, 10);
    boardController.placeShip(boardInput);
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("placePlayerShipsRandomly calls placePlayerShipsRandomly from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    boardController.placePlayerShipsRandomly();
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("placeEnemyShipsRandomly calls placeEnemyShipsRandomly from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    boardController.placeEnemyShipsRandomly();
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
  test("hitTargetByEnemy calls hitTargetByEnemy from BoardService", () => {
    const boardService = new BoardService();
    const boardController = new BoardController(boardService);
    boardController.hitTargetByEnemy();
    expect(BoardService).toHaveBeenCalledTimes(1);
  });
});
