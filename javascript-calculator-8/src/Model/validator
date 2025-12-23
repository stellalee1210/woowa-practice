import { CUSTOM_DELIMETER } from "../constants.js";
import { ERROR_MSG } from "../constants.js";
export const validateInput = (string) => {
  if (string.length > 0) return true;
  return false;
};

export const validateCustomDFormat = (string) => {
  if (
    string.startsWith(CUSTOM_DELIMETER.start) &&
    string.includes(CUSTOM_DELIMETER.end)
  )
    return true;
  return false;
};

export const validateCustomDValue = (delimeters) => {
  const filteredDelimeters = delimeters.filter((d) => !isNaN(Number(d)));

  if (filteredDelimeters.length === 0) return true;
  return false;
};

export const validateNumbers = (numbers) => {
  const onlyIntegers = numbers.filter((n) => !Number.isInteger(n));
  if (onlyIntegers.length > 0) throw Error(ERROR_MSG.UNVALID_ADDEND);

  const onlyNotPositiveIntegers = numbers.filter((n) => n <= 0);
  if (onlyNotPositiveIntegers.length > 0)
    throw Error(ERROR_MSG.NUBMER_NOT_POSITIVE);

  return true;
};
