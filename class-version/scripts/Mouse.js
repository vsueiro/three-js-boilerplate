import * as THREE from "three";

export default class Mouse {
  constructor(world) {
    this.world = world;

    this.coords = new THREE.Vector2(0, 0);

    this.range = [-1, 1];
    this.diff = this.range[1] - this.range[0];
    this.threshold = this.diff * 0.005;
    this.dragging = false;
    this.down = false;

    this.setup();
  }

  getCoords(event) {
    const { offsetX, offsetY } = event;
    const { width, height } = this.world;
    const x = (offsetX / width) * this.diff - this.diff / 2;
    const y = -(offsetY / height) * this.diff + this.diff / 2;

    return new THREE.Vector2(x, y);
  }

  handleDown(event) {
    this.down = true;
    this.prevCoords = this.getCoords(event);
  }

  handleMove(event) {
    this.coords = this.getCoords(event);

    if (this.down) {
      const distance = this.prevCoords.distanceTo(this.coords);

      if (distance > this.threshold) {
        this.dragging = true;
      }
    }
  }

  handleUp(event) {
    if (this.dragging === false) {
      this.handleClick();
    }

    this.down = false;
    this.dragging = false;
  }

  handleClick() {
    const closest = this.world.raycaster.closest("type", "cat");

    if (closest === undefined) {
      return;
    }

    alert(closest.userData.title);
  }

  setup() {
    this.world.element.addEventListener("mousedown", (event) => {
      this.handleDown(event);
    });

    this.world.element.addEventListener("mousemove", (event) => {
      this.handleMove(event);
    });

    this.world.element.addEventListener("mouseup", (event) => {
      this.handleUp(event);
    });

    // this.world.element.addEventListener("click", (event) => {
    //   this.handleClick(event);
    // });
  }

  update() {}
}
