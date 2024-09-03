import World from "./World.js";

export default class App {
  constructor() {
    this.world = new World(this, ".canvas", ".canvas2D");

    this.setup();
  }

  setup() {
    // Load data, etc
  }
}
