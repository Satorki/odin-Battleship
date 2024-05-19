import { BattleShipController } from "../../../src/BattleShip/Ui/BattleShipController.js";
jest.mock("../../../src/BattleShip/Ui/BattleShipController.js");

describe("BattleShipController", () => {
  let battleShipController;

  beforeEach(() => {
    battleShipController = new BattleShipController();
  });

  it("should prepare boards", () => {
    const prepareBoardsSpy = jest.spyOn(battleShipController, "prepareBoards");
    battleShipController.prepareBoards();
    expect(prepareBoardsSpy).toHaveBeenCalled();
  });

  it("should start the game", () => {
    const startGameSpy = jest.spyOn(battleShipController, "startGame");
    battleShipController.startGame();
    expect(startGameSpy).toHaveBeenCalled();
  });

  it("should start rounds", () => {
    const startsRundsSpy = jest.spyOn(battleShipController, "startsRunds");
    battleShipController.startsRunds();
    expect(startsRundsSpy).toHaveBeenCalled();
  });

  it("should restart the game", () => {
    const restartGameSpy = jest.spyOn(battleShipController, "restartGame");
    battleShipController.restartGame();
    expect(restartGameSpy).toHaveBeenCalled();
  });

  it("should place a ship", () => {
    const placeShipInput = {
      /* input data for placing a ship */
    };
    const placeShipSpy = jest.spyOn(battleShipController, "placeShip");
    battleShipController.placeShip(placeShipInput);
    expect(placeShipSpy).toHaveBeenCalledWith(placeShipInput);
  });

  it("should place player ships randomly", () => {
    const placePlayerShipsRandomlySpy = jest.spyOn(
      battleShipController,
      "placePlayerShipsRandomly"
    );
    battleShipController.placePlayerShipsRandomly();
    expect(placePlayerShipsRandomlySpy).toHaveBeenCalled();
  });
});
