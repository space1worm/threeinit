import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

import ThreeScene from "./scene";

/**
 * Controls ThreeJs Animations, Initializes whole threejs App.
 */
class AnimateApplication {
  private animationObserver: number | null;
  private cube: Mesh<BoxGeometry, MeshBasicMaterial>;

  /**
   * Creates a geomery, initialize ThreeJs App animation Observer.
   */
  constructor() {
    this.animationObserver = null;
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new Mesh(geometry, material);

    this.init();
  }

  /**
   * Initilizes application, load's all of the necessary function to the app to start
   * the threeJs application.
   */
  init(): void {
    this.initGeometries();
  }

  /**
   * Loads geometries in to the scene.
   */
  initGeometries(): void {
    ThreeScene.scene.add(this.cube);
  }

  /**
   * Strats ThreeJs App animation
   */
  startAnimation(): void {
    const { scene, camera, renderer } = ThreeScene;

    /**
     * Starts animation
     */
    const animate = (): void => {
      this.animationObserver = requestAnimationFrame(animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

  /**
   * Stops ThreeJs App animation.
   */
  stopAnimation(): void {
    if (this.animationObserver) cancelAnimationFrame(this.animationObserver);
  }
}

const AnimateThreeApp = new AnimateApplication();
export default AnimateThreeApp;
