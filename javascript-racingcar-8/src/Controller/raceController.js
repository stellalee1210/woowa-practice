import { getInput, getCount } from "../View/input.js";
import { print } from "../View/output.js";
import { parseCarName } from "../Model/parser.js";
import { validateCarNames, validateCount } from "../Model/validator.js";
import { Car } from "../Model/Car.js";

export const raceController = async () => {
  try {
    const carNameInput = await getInput();
    const parsedInput = parseCarName(carNameInput);
    validateCarNames(parsedInput);

    const countInput = await getCount();
    const validCount = validateCount(countInput);

    const cars = initializeCars(parsedInput);
    raceProcess(cars, validCount);
  } catch (error) {
    throw Error(error.message);
  }
};

const initializeCars = (carList) => {
  const cars = [];
  carList.forEach((name) => {
    const car = new Car(name);
    cars.push(car);
  });
  return cars;
};

const raceProcess = (carList, count) => {
  for (let i = 0; i < count; i++) {
    print("");
    carList.forEach((car) => {
      car.makeMove();
      print(car.makeMoveMsg());
    });
  }
  print("");
  const winners = calculateWinner(carList);

  const winnerMsg = `최종 우승자 : ${winners.join(", ")}`;
  print(winnerMsg);
};

const calculateWinner = (carList) => {
  const sortedCarList = carList.sort(
    (car1, car2) => car2.getMove() - car1.getMove()
  );

  const largestCount = sortedCarList[0].getMove();
  const winners = sortedCarList.filter((car) => car.getMove() === largestCount);

  return winners.map((car) => car.getName());
};
