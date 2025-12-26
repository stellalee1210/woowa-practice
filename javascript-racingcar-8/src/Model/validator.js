import { ERROR_MSG } from "../constants.js";

export const validateCarNames = (list) => {
  const unvalidNamesList = list.filter(
    (name) => name.length > 5 || name.length === 0
  );

  if (unvalidNamesList.length > 0) {
    checkUnvalidNames(unvalidNamesList);
  }
};

//잘못 입력된 차 이름의 종류에 따른 에러 처리
const checkUnvalidNames = (namesList) => {
  namesList.sort((a, b) => a.length - b.length);
  const tempName = namesList.shift();

  if (tempName.length === 0) {
    throw Error(ERROR_MSG.UNVALID_CARNAME_NULL);
  }

  if (tempName) {
    throw Error(ERROR_MSG.UNVALID_CARNAME_EXCEED);
  }
};

export const validateCount = (rawCount) => {
  const count = Number(rawCount);
  if (!Number.isInteger(count)) throw Error(ERROR_MSG.UNVALID_COUNT_NAN);
  if (count === 0) throw Error(ERROR_MSG.UNVALID_COUNT_ZERO);
  if (count < 0) throw Error(ERROR_MSG.UNVALID_COUNT_NEGATIVE);

  return count;
};
