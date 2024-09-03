import DeltaTime from "./DeltaTime.js";
import Scene from "./Scene.js";
import Camera from "./Camera.js";
import Controls from "./Controls.js";
import Renderer from "./Renderer.js";
import Mouse from "./Mouse.js";
import Renderer2D from "./Renderer2D.js";
// import Raycaster from "./Raycaster.js";

import Box from "./Box.js";

export default class World {
  constructor(app, canvas, canvas2D) {
    this.app = app;
    this.element = document.querySelector("#world");
    this.canvas = this.element.querySelector(canvas);
    this.canvas2D = this.element.querySelector(canvas2D);

    this.setup();
  }

  get width() {
    return this.element.offsetWidth;
  }

  get height() {
    return this.element.offsetHeight;
  }

  setup() {
    this.deltaTime = new DeltaTime();

    this.scene = new Scene(this);
    this.camera = new Camera(this);
    this.controls = new Controls(this);
    this.renderer = new Renderer(this);
    this.mouse = new Mouse(this);
    this.renderer2D = new Renderer2D(this);
    // this.raycaster = new Raycaster(this);

    // Create custom object
    this.box = new Box(this);

    window.addEventListener("resize", () => {
      this.resize();
    });

    requestAnimationFrame((ms) => this.update(ms));
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.renderer2D.resize();
  }

  update(ms) {
    this.deltaTime.update(ms);

    this.scene.update();
    this.camera.update();
    this.controls.update();
    this.renderer.update();
    this.mouse.update();
    this.renderer2D.update();
    // this.raycaster.update();

    // Update custom object
    this.box.update();

    requestAnimationFrame((ms) => this.update(ms));
  }
}
