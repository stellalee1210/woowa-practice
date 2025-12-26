import { Console } from "@woowacourse/mission-utils";
import { CAR_NAME_INPUT, COUNT_INPUT } from "../constants.js";

export const getInput = async () => {
  return await Console.readLineAsync(CAR_NAME_INPUT);
};

export const getCount = async () => {
  return await Console.readLineAsync(COUNT_INPUT);
};
