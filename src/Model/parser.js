import { CUSTOM_DELIMETER, ERROR_MSG, DELIMETERS } from "../constants.js";
import { validateCustomDFormat, validateCustomDValue } from "./validator.js";
import { Console } from "@woowacourse/mission-utils";
export const parseCustomDelimeter = (string) => {
  try {
    //만약 커스텀 구분자의 형식이 아니라면 throw Error
    if (!validateCustomDFormat(string))
      throw Error(ERROR_MSG.WRONG_CUSTOM_DELIMETER_FORMAT);

    //커스텀 구분자 형식의 끝 부분으로 split 한 뒤, 형식의 앞부분을 slice 한 뒤, 한 번 더 ""로 split하면 커스텀 구분자를 구할 수 있음
    const [splittedCustomDelimeter, rawNumbers] = string.split(
      CUSTOM_DELIMETER.end
    );
    const slicedCustomDelimetrer = splittedCustomDelimeter.slice(2).split();

    //커스텀 구분자 값 확인
    if (validateCustomDValue(slicedCustomDelimetrer)) {
      slicedCustomDelimetrer.map((delimeter) => DELIMETERS.push(delimeter));
      return rawNumbers;
    }

    throw Error(ERROR_MSG.UNVALID_DELIMETER_VALUE);
  } catch (error) {
    throw Error(error.message);
  }
};

export const parseNumbers = (string) => {
  //얕은복사로 원본 배열에 영향이 안 가게 막기
  let stringCopy = string.slice();
  DELIMETERS.forEach((d) => {
    stringCopy = stringCopy.replaceAll(d, " ");
  });

  return stringCopy.split(" ").map(Number);
};
