import { Random } from "@woowacourse/mission-utils";

export class Car {
  #name;
  #move;
  #winner;
  constructor(name) {
    this.#name = name;
    this.#move = 0;
    this.#winner = false;
  }

  makeMove() {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) this.#move++;
  }

  makeMoveMsg() {
    const count = "-".repeat(this.#move);
    return `${this.#name} : ${count}`;
  }

  getMove() {
    return this.#move;
  }

  getName() {
    return this.#name;
  }
}
