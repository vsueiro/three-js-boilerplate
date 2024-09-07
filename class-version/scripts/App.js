import Data from "./Data.js";
import World from "./World.js";

export default class App {
  constructor() {
    this.data = new Data();

    const sources = [
      {
        name: "cats",
        path: "./data/cats.csv",
        type: "csv", // (csv|json)
      },
    ];

    this.data.load(sources, () => {
      this.setup();
    });
  }

  setup() {
    this.world = new World(this, ".canvas", ".canvas2D");
  }
}
