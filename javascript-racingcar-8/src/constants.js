export const CAR_NAME_INPUT =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";

export const COUNT_INPUT = "시도할 횟수는 몇 회인가요?\n";

export const DELIMITER = `,`;

export const ERROR_MSG = {
  UNVALID_CARNAME_EXCEED:
    "[ERROR] 입력된 차 이름이 5글자가 넘습니다. 5글자 이내로 입력해주세요.",
  UNVALID_CARNAME_NULL:
    "[ERROR] 입력된 차 이름이 공백입니다. 차 이름을 넣어주세요.",
  UNVALID_COUNT_NAN:
    "[ERROR] 입력된 이동 횟수는 숫자가 아닙니다. 숫자를 입력해주세요.",
  UNVALID_COUNT_ZERO:
    "[ERROR] 입력된 이동 횟수는 0입니다. 양인 정수를 입력해주세요.",
  UNVALID_COUNT_NEGATIVE:
    "[ERROR] 입력된 이동횟수가 음수입니다. 양인 정수를 입력해주세요.",
};
