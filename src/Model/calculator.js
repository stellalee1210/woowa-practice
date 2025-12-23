import { validateNumbers } from "./validator.js";

export const calculateNumbers = (numbers) => {
  try {
    if (validateNumbers(numbers))
      return numbers.reduce((acc, cur) => acc + cur);
  } catch (error) {
    throw Error(error.message);
  }
};
