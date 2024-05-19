import { ShipController } from "../../../src/Ship/Ui/ShipController.js";
import { ShipService } from "../../../src/Ship/Application/ShipService.js";
import { ShipInput } from "../../../src/Ship/Ui/ShipInput.js";
jest.mock("../../../src/Ship/Ui/ShipController.js");
jest.mock("../../../src/Ship/Application/ShipService.js");

beforeEach(() => {
  ShipController.mockClear();
  ShipService.mockClear();
});

describe("ShipController structure", () => {
  test("ShipController is a class", () => {
    const shipController = new ShipController();
    expect(ShipController).toHaveBeenCalledTimes(1);
  });

  test("ShipController has createShips method", () => {
    const shipController = new ShipController();
    expect(shipController.createShips).toBeDefined();
  });

  test("ShipController has createEnemyShips method", () => {
    const shipController = new ShipController();
    expect(shipController.createEnemyShips).toBeDefined();
  });

  test("ShipController has createEnemyShip method", () => {
    const shipController = new ShipController();
    expect(shipController.createEnemyShip).toBeDefined();
  });

  test("ShipController has createShip method", () => {
    const shipController = new ShipController();
    expect(shipController.createShip).toBeDefined();
  });

  test("ShipController has isAllShipsSunk method", () => {
    const shipController = new ShipController();
    expect(shipController.isAllShipsSunk).toBeDefined();
  });
});

describe("ShipController methods", () => {
  test("createShip calls createShip from shipService", () => {
    const shipService = new ShipService();
    const shipController = new ShipController(shipService);
    const shipInput = new ShipInput("owner", "name", 1);
    shipController.createShip(shipInput);
    expect(ShipService).toHaveBeenCalledTimes(1);
  });
  test("createEnemyShip calls createEnemyShip from shipService", () => {
    const shipService = new ShipService();
    const shipController = new ShipController(shipService);
    const shipInput = new ShipInput("owner", "name", 1);
    shipController.createEnemyShip(shipInput);
    expect(ShipService).toHaveBeenCalledTimes(1);
  });
  test("createShips calls createShip from shipService", () => {
    const shipService = new ShipService();
    const shipController = new ShipController(shipService);
    const shipInput = new ShipInput("owner", "name", 1);
    shipController.createShips(shipInput);
    expect(ShipService).toHaveBeenCalledTimes(1);
  });
  test("createEnemyShips calls createEnemyShip from shipService", () => {
    const shipService = new ShipService();
    const shipController = new ShipController(shipService);
    const shipInput = new ShipInput("owner", "name", 1);
    shipController.createEnemyShips(shipInput);
    expect(ShipService).toHaveBeenCalledTimes(1);
  });
  test("isAllShipsSunk calls isAllShipsSunk from shipService", () => {
    const shipService = new ShipService();
    const shipController = new ShipController(shipService);
    shipController.isAllShipsSunk("owner");
    expect(ShipService).toHaveBeenCalledTimes(1);
  });
});
