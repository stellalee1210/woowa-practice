import { calculatorController } from "./Controller/calculatorController.js";

class App {
  async run() {
    await calculatorController();
  }
}

export default App;
