import { Camera } from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/**
 *
 */
export default class AppControls {
  private static instance: AppControls;
  control: OrbitControls | FlyControls | null = null;

  /**
   * init
   */
  private constructor() {
    //
  }

  /**
   * Singelton
   *
   * @returns {Controls} Controls instance
   */
  static getInstance(): AppControls {
    if (AppControls.instance) return AppControls.instance;

    AppControls.instance = new AppControls();
    return AppControls.instance;
  }

  /**
   * returns control method 'orbit'
   *
   * see more at : https://threejs.org/docs/?q=orbit#examples/en/controls/OrbitControls
   *
   * @param {Camera} camera application's camera
   * @param {HTMLElement} domElement canvas
   * @returns {OrbitControls} OrbitControls
   */
  public getOrbitControls(camera: Camera, domElement: HTMLElement): OrbitControls {
    this.disposeControl();

    this.control = new OrbitControls(camera, domElement);
    this.control.enableDamping = true;
    this.control.dampingFactor = 0.025;
    this.control.minDistance = -1;
    this.control.maxDistance = 1000;

    return this.control;
  }

  /**
   * returns control method 'fly'
   *
   * see more at : https://threejs.org/docs/#examples/en/controls/FlyControls
   *
   * @param {Camera} camera application's camera
   * @param {HTMLElement} domElement canvas
   * @returns {FlyControls} FlyControls
   */
  public getFlyControls(camera: Camera, domElement: HTMLElement): FlyControls {
    this.disposeControl();

    this.control = new FlyControls(camera, domElement);
    this.control.movementSpeed = 0.1;

    return this.control;
  }

  /**
   * Dispose control, remove all event listeners
   */
  public disposeControl(): void {
    if (this.control) this.control.dispose();
  }
}
