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
      const x = photo.x * 0.75;
      const y = photo.y * 0.75;
      const z = photo.z * 0.75;

      const path = `./media/${photo.filename}`;
      const texture = this.world.textureLoader.load(path);

      const geometry = new THREE.PlaneGeometry(w, h);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.FrontSide,
      });

      const plane = new THREE.Mesh(geometry, material);
      plane.position.set(x, y, z);
      plane.userData.type = "cat";
      plane.userData.title = photo.title;

      this.list.push(plane);
      this.world.scene.instance.add(plane);
    });
  }

  update() {
    this.list.forEach((plane) => {
      plane.lookAt(this.world.camera.instance.position);

      if (plane.userData.hover) {
        plane.material.color.set(0xffff00);
      } else {
        plane.material.color.set(0xffffff);
      }
    });
  }
}
