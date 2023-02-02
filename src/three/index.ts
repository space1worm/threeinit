import AppCamera from "./camera";
import AppRenderer from "./renderer";
import AppAnimation from "./animation";
import AppListeners from "./listeners";

import { orbitControl } from "../utils/controls";
/**
 *
 */
export default class InitApp {
  private readonly container: HTMLDivElement;
  private cameraSettings: AppCamera;
  private rendererSettings: AppRenderer;
  private listenersSettings: AppListeners;
  private animationSettings: AppAnimation;

  /**
   * Get container to append ThreeJs canvas in it.
   *
   * @param {HTMLDivElement} parent element to append canvas in
   */
  constructor(parent: HTMLDivElement) {
    this.container = parent;
    this.cameraSettings = AppCamera.getInstance();
    this.rendererSettings = AppRenderer.getInstance();
    this.listenersSettings = AppListeners.getInstance();
    this.animationSettings = AppAnimation.getInstance();
  }

  /**
   * initializes app
   */
  init(): void {
    this.prepareContainer();
    this.prepareRenderer();
    this.prepareCameraPosition();
    this.prepareControls();
    this.applyEventListeners();
    this.animationSettings.startAnimation();
  }

  /**
   * Removes application from the dom.
   */
  destroy(): void {
    this.animationSettings.stopAnimation();
    this.removeEventListeners();
    this.container.removeChild(this.rendererSettings.renderer.domElement);
  }

  /**
   * Update scene dimensions on window resize height/width
   */
  private applyEventListeners(): void {
    this.listenersSettings.applyListeners(this.container);
  }

  /**
   * Remove scene dimensions on window resize height/width
   */
  private removeEventListeners(): void {
    this.listenersSettings.removeListeners(this.container);
  }

  /**
   * applies canvas to the app
   */
  private prepareContainer(): void {
    this.container.append(this.rendererSettings.renderer.domElement);
  }

  /**
   * Configures renderer settings
   */
  private prepareRenderer(): void {
    this.rendererSettings.setRendererSize(this.container.offsetWidth, this.container.offsetHeight);
    this.rendererSettings.setPixelRatio(window.devicePixelRatio);
    this.rendererSettings.renderer.localClippingEnabled = false;
  }

  /**
   * Configures camera's position
   */
  private prepareCameraPosition(): void {
    this.cameraSettings.camera.position.z = 5;
  }

  /**
   * Applying control method
   */
  private prepareControls(): void {
    const controls = orbitControl(this.cameraSettings.camera, this.rendererSettings.renderer.domElement);
    controls.autoRotate = true;
    controls.update();
  }
}
