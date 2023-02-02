import { Scene } from "three";

/**
 * Controls applications scene.
 */
export default class AppScene {
  private static isntance: AppScene;
  scene: Scene;
  /**
   * init scnene
   */
  private constructor() {
    this.scene = new Scene();
  }

  /**
   * Singelton
   *
   * @returns {AppScene} AppScene class
   */
  static getInstance(): AppScene {
    if (AppScene.isntance) return this.isntance;

    AppScene.isntance = new AppScene();
    return this.isntance;
  }

  /**
   * Updates dimensions of scene on window resize
   */
  public onWindowResize(): void {
    this.scene.updateMatrix();
  }
}
