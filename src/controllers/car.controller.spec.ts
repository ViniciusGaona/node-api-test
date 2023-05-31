import CarController from "./car.controller";

describe("CarController", () => {
  let carController: CarController;
  let prismaMock: any;

  beforeEach(() => {
    prismaMock = {
      car: {
        findMany: jest.fn().mockResolvedValue(["car1", "car2", "car3"]),
      },
    };

    carController = new CarController();
    carController['_prisma'] = prismaMock;
  });

  describe("list", () => {
    it("should return an array of cars", async () => {
      const result = await carController.list();

      expect(prismaMock.car.findMany).toHaveBeenCalledTimes(1);
      expect(result).toEqual(["car1", "car2", "car3"]);
    });
  });
});