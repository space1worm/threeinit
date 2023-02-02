import { OrthographicCamera, PerspectiveCamera, Vector3, Spherical } from "three";

import { perspectiveCamera, orthographicCamera } from "../../utils/camera.utils";
import { CameraVariations } from "../../app.types";

/**
 * Controls application's camera.
 */
export default class AppCamera {
  static instance: AppCamera;
  camera: PerspectiveCamera | OrthographicCamera;

  /**
   * init camera
   */
  private constructor() {
    this.camera = perspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  }

  /**
   * @returns {AppCamera} AppCamera class
   */
  static getInstance(): AppCamera {
    if (AppCamera.instance) return AppCamera.instance;

    AppCamera.instance = new AppCamera();
    return AppCamera.instance;
  }

  /**
   * @param {number} fov field of view.
   */
  public updateFOV(fov: number): void {
    if (this.camera instanceof PerspectiveCamera) {
      this.camera.fov = fov;
    }
  }

  /**
   * toggle camera from perspective to orthograpgic and vice versa
   *
   * @param {CameraVariations} variation of the camera orthographic/perspective
   * @param {number} aspect Camera frustum aspect ratio.
   * @param {number} near Camera frustum near plane.
   */
  public switchCamera(variation: CameraVariations, aspect: number, near: number): void {
    if (this.camera.name === variation) return;
    else {
      if (variation === "perspective") {
        const sphere = new Spherical();
        const oldPosition = this.camera.position;
        const rad2 = oldPosition.distanceTo(new Vector3(0, 0, 0)) / this.camera.zoom;

        this.camera = perspectiveCamera(75, aspect / near, 0.1, 1000);
        this.camera.position.copy(oldPosition);

        sphere.setFromVector3(this.camera.position);

        this.camera.position.x = rad2 * Math.sin(sphere.theta) * Math.sin(sphere.phi);
        this.camera.position.y = rad2 * Math.cos(sphere.phi);
        this.camera.position.z = rad2 * Math.cos(sphere.theta) * Math.sin(sphere.phi);

        this.camera.lookAt(0, 0, 0);
      } else {
        const objectPosition = new Vector3(0, 0, 0);
        const lineOfSight = new Vector3();

        const cameraPosition = this.camera.position.clone();
        const cameraMatrix = this.camera.matrix.clone();
        const objectCamera = this.camera.position;

        this.camera.getWorldDirection(lineOfSight);

        const objectDistance = objectPosition.clone().sub(objectCamera);
        const depth = objectDistance.dot(lineOfSight);
        const asp = aspect / near;

        const heightOrtho = depth * 2 * Math.atan((75 * (Math.PI / 180)) / 2);
        const widthOrtho = heightOrtho * asp;

        this.camera = orthographicCamera(
          widthOrtho / -2,
          widthOrtho / 2,
          heightOrtho / 2,
          heightOrtho / -2,
          -10000,
          10000,
        );

        this.camera.position.copy(cameraPosition);
        this.camera.matrix.copy(cameraMatrix);
        this.camera.lookAt(0, 0, 0);
      }
    }
  }

  /**
   * updates camerea dimensions on window resize
   *
   * @param {number} fov number
   */
  public onWindowResize = (fov: number): void => {
    this.updateFOV(fov);
  };
}
