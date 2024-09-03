import * as THREE from "three";

export default class Box {
  constructor(world) {
    this.world = world;
    this.setup();
  }

  setup() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    this.instance = new THREE.Mesh(geometry, material);

    this.world.scene.instance.add(this.instance);
  }

  update() {
    this.instance.rotation.x = this.world.deltaTime.lastTime * 0.001;
    this.instance.rotation.y = this.world.deltaTime.lastTime * 0.001;
  }
}
