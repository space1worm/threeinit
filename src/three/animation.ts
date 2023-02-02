import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

import AppScene from "./scene";
import render from "../utils/render";

/**
 *
 */
export default class AppAnimation {
  private static instance: AppAnimation;
  private animationObserver: number | null;
  cube: Mesh;

  /**
   * Init
   */
  private constructor() {
    this.animationObserver = null;

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new Mesh(geometry, material);

    AppScene.getInstance().scene.add(this.cube);
  }

  /**
   * Singelton
   *
   * @returns {AppAnimation} AppAnimation instance
   */
  static getInstance(): AppAnimation {
    if (AppAnimation.instance) return AppAnimation.instance;

    AppAnimation.instance = new AppAnimation();
    return AppAnimation.instance;
  }

  /**
   * Strats ThreeJs  animation
   */
  public startAnimation(): void {
    /**
     * function which triggers animation frames to render the scene on each frame.
     */
    const animate = (): void => {
      this.animationObserver = requestAnimationFrame(animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      render();
    };

    animate();
  }

  /**
   * Stops ThreeJs App animation.
   */
  public stopAnimation(): void {
    if (this.animationObserver) cancelAnimationFrame(this.animationObserver);
  }
}
