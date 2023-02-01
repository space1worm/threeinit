import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";

import ThreeScene from "./scene";

/**
 * Provides different type of controls of threeJs
 */
export default class ThreeControls {
  /**
   * @returns {OrbitControls} threeJs controller type
   */
  static orbitControl(): OrbitControls {
    return new OrbitControls(ThreeScene.camera, ThreeScene.renderer.domElement);
  }

  /**
   * @returns {FlyControls} threeJs controller type
   */
  static flyControl(): FlyControls {
    return new FlyControls(ThreeScene.camera, ThreeScene.renderer.domElement);
  }

  /**
   * Singelton Class
   */
  private constructor() {
    // do nothing
  }
}
