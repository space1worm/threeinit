import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

import { ThreeScene } from "./scene";

class Animation {
  private animFrame: number | null;
  private cube: Mesh<BoxGeometry, MeshBasicMaterial>;

  constructor() {
    this.animFrame = null;
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new Mesh(geometry, material);
  }

  init() {
    this.initGeometries();
    this.startAnimation();
  }

  initGeometries() {
    ThreeScene.scene.add(this.cube);
    ThreeScene.camera.position.z = 5;
  }

  startAnimation() {
    const { scene, camera, renderer } = ThreeScene;

    const animate = () => {
      this.animFrame = requestAnimationFrame(animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

  stopAnimation() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
  }
}

const AnimateThree = new Animation();
export default AnimateThree;
