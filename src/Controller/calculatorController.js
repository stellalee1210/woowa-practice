import { parseCustomDelimeter, parseNumbers } from "../Model/parser.js";
import { validateInput } from "../Model/validator.js";
import { calculateNumbers } from "../Model/calculator.js";
import { getInput, print } from "../View/io.js";
import { CUSTOM_DELIMETER } from "../constants.js";

export const calculatorController = async () => {
  //입력값 요청
  let input = await getInput();

  if (validateInput(input)) {
    //커스텀 구분자가 있다면 추출 요청
    if (input.startsWith(CUSTOM_DELIMETER.start)) {
      input = parseCustomDelimeter(input);
    }
    const numbers = parseNumbers(input);
    const result = calculateNumbers(numbers);
    print(result);
  }

  //입력값이 비었을 때 0 출력
  print(0);
};
