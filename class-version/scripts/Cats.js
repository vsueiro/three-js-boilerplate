import * as THREE from "three";

export default class Cats {
  constructor(world) {
    this.world = world;
    this.list = [];
    this.setup();
  }

  setup() {
    const photos = this.world.app.data.cats;

    photos.forEach((photo) => {
      const w = photo.w * 0.001;
      const h = photo.h * 0.001;
      const path = `./media/${photo.filename}`;
      const texture = this.world.textureLoader.load(path);
      const geometry = new THREE.PlaneGeometry(w, h);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(geometry, material);
      plane.position.set(photo.x, photo.y, photo.z);

      this.list.push(plane);
      this.world.scene.instance.add(plane);
    });
  }

  update() {
    this.list.forEach((plane) => {
      plane.lookAt(this.world.camera.instance.position);
    });
  }
}
