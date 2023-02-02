import AppStore from "./appStore";

/**
 * Init
 */
export default class InitApp {
  private readonly container: HTMLDivElement;
  appStore: AppStore;
  /**
   * Get container to append ThreeJs canvas in it.
   *
   * @param {HTMLDivElement} parent element to append canvas in
   */
  constructor(parent: HTMLDivElement) {
    this.container = parent;
    this.appStore = AppStore.getInstance();
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
    this.appStore.animationSettings.startAnimation();
  }

  /**
   * Removes application from the dom.
   */
  destroy(): void {
    this.appStore.animationSettings.stopAnimation();
    this.removeEventListeners();
    this.container.removeChild(this.appStore.rendererSettings.renderer.domElement);
  }

  /**
   * Update scene dimensions on window resize height/width
   */
  private applyEventListeners(): void {
    this.appStore.listenersSettings.applyListeners(this.container);
  }

  /**
   * Remove scene dimensions on window resize height/width
   */
  private removeEventListeners(): void {
    this.appStore.listenersSettings.removeListeners(this.container);
  }

  /**
   * applies canvas to the app
   */
  private prepareContainer(): void {
    this.container.append(this.appStore.rendererSettings.renderer.domElement);
  }

  /**
   * Configures renderer settings
   */
  private prepareRenderer(): void {
    this.appStore.rendererSettings.setRendererSize(this.container.offsetWidth, this.container.offsetHeight);
    this.appStore.rendererSettings.setPixelRatio(window.devicePixelRatio);
    this.appStore.rendererSettings.renderer.localClippingEnabled = false;
  }

  /**
   * Configures camera's position
   */
  private prepareCamera(): void {
    this.appStore.cameraSettings.camera.position.z = 5;
    this.appStore.cameraSettings.updateFOV(this.container.offsetWidth / this.container.offsetHeight);
  }

  /**
   * Applying control method
   */
  private prepareControls(): void {
    const controls = this.appStore.controlsSettings.getOrbitControls(
      this.appStore.cameraSettings.camera,
      this.appStore.rendererSettings.renderer.domElement,
    );
    controls.autoRotate = true;
    controls.update();
  }
}
