import * as THREE from "three";

export default class Mouse {
  constructor(world) {
    this.world = world;

    // Will always be a value between -1 and +1 in both axis
    this.coords = new THREE.Vector2(-1, -1);

    this.setup();
  }

  handleMove(event) {
    const { offsetX, offsetY } = event;
    const { width, height } = this.world;

    this.coords.x = (offsetX / width) * 2 - 1;
    this.coords.y = -(offsetY / height) * 2 + 1;
  }

  handleClick(event) {
    const closest = this.world.raycaster.closest("type", "cat");

    if (closest === undefined) {
      return;
    }

    alert(closest.userData.title);
  }

  setup() {
    this.world.element.addEventListener("mousemove", (event) => {
      this.handleMove(event);
    });

    this.world.element.addEventListener("click", (event) => {
      this.handleClick(event);
    });
  }

  update() {}
}
