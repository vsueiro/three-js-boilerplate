import * as THREE from "three";

export default class Camera {
  constructor(world) {
    this.world = world;

    this.fov = 50;
    this.near = 0.1;
    this.far = 2000;
    this.zoom = 1;
    this.x = 0;
    this.y = 0;
    this.z = 10;

    this.setup();
  }

  get aspect() {
    return this.world.width / this.world.height;
  }

  get origin() {
    return new THREE.Vector3(0, 0, 0);
  }

  resize() {
    this.instance.aspect = this.aspect;
    this.instance.updateProjectionMatrix();
  }

  setup() {
    this.instance = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );

    this.instance.zoom = this.zoom;
    this.instance.position.set(this.x, this.y, this.z);

    this.instance.lookAt(this.origin);
    this.world.scene.instance.add(this.instance);
  }

  update() {}
}
