import { DELIMITER } from "../constants.js";

export const parseCarName = (list) => {
  return list.split(DELIMITER);
};
