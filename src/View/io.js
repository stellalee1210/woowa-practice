import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG, OUTPUT_MSG } from "../constants.js";
export const getInput = async () => {
  return await Console.readLineAsync(INPUT_MSG);
};

export const print = (value) => {
  const output = `${OUTPUT_MSG} ${value}`;
  Console.print(output);
};
