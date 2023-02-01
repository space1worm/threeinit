import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

/**
 * Controls scene camera and renderer of the application.
 */
export default class ThreeScene {
  static scene = new Scene();
  static camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  static renderer = new WebGLRenderer({ antialias: true, alpha: true });

  /**
   * Resize's canvas based of the container's width/height.
   *
   * @param {number} width of the container
   * @param {number} height of the container
   */
  static setRendererSize(width: number, height: number): void {
    ThreeScene.renderer.setSize(width, height);
  }

  /**
   * Singelton, this class should't be initialized and in application
   * there should be only 1 camera renderer and scene.
   */
  private constructor() {
    // do nothing
  }
}
