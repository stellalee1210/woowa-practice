import { raceController } from "./Controller/raceController.js";

class App {
  async run() {
    await raceController();
  }
}

export default App;
