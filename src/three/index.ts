import Settings from "./settings";
import loader from "./geometry-loader";
import { ambientLight, directionalLight } from "../utils/lights.utils";

/**
 * Init
 */
export default class InitApp {
  private readonly container: HTMLDivElement;
  /**
   * Get container to append ThreeJs canvas in it.
   *
   * @param {HTMLDivElement} parent element to append canvas in
   */
  constructor(parent: HTMLDivElement) {
    this.container = parent;
  }

  /**
   * initializes app
   */
  init(): void {
    this.prepareContainer();
    this.prepareRenderer();
    this.prepareCamera();
    this.prepareControls();
    this.applyEventListeners();
    this.preapreLights();
    Settings.animationSettings.startAnimation();
    loader.loadGeomtry("test");
  }

  /**
   * Removes application from the dom.
   */
  destroy(): void {
    Settings.animationSettings.stopAnimation();
    this.removeEventListeners();
    this.container.removeChild(Settings.rendererSettings.renderer.domElement);
  }

  /**
   * Update scene dimensions on window resize height/width
   */
  private applyEventListeners(): void {
    Settings.listenersSettings.applyListeners(this.container);
  }

  /**
   * Remove scene dimensions on window resize height/width
   */
  private removeEventListeners(): void {
    Settings.listenersSettings.removeListeners(this.container);
  }

  /**
   * applies canvas to the app
   */
  private prepareContainer(): void {
    this.container.append(Settings.rendererSettings.renderer.domElement);
  }

  /**
   * Configures renderer settings
   */
  private prepareRenderer(): void {
    Settings.rendererSettings.setRendererSize(this.container.offsetWidth, this.container.offsetHeight);
    Settings.rendererSettings.setPixelRatio(window.devicePixelRatio);
    Settings.rendererSettings.renderer.localClippingEnabled = false;
  }

  /**
   * Configures camera's position
   */
  private prepareCamera(): void {
    Settings.cameraSettings.camera.position.z = 5;
    Settings.cameraSettings.updateFOV(this.container.offsetWidth / this.container.offsetHeight);
  }

  /**
   * Applying control method
   */
  private prepareControls(): void {
    const controls = Settings.controlsSettings.getOrbitControls(
      Settings.cameraSettings.camera,
      Settings.rendererSettings.renderer.domElement,
    );
    controls.autoRotate = true;
    controls.update();
  }

  /**
   *
   */
  private preapreLights(): void {
    const ambLight = ambientLight("#ffffff", 0.6);
    const dirLight = directionalLight("#ffffff", 0.45);

    Settings.sceneSettings.scene.add(ambLight);
    Settings.sceneSettings.scene.add(dirLight);
  }
}
