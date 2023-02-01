import ThreeScene from "./scene";
import AnimateThreeApp from "./animate";
import ThreeControls from "./controls";

//TODO Modify this class as a singelton.

/**
 * Starts/Stops application
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
    this.prepareCameraPosition();
    this.prepareControls();
    this.applyEventListeners();
    AnimateThreeApp.startAnimation();
  }

  /**
   * Removes application from the dom.
   */
  destroy(): void {
    AnimateThreeApp.stopAnimation();
    this.removeEventListeners();
    this.container.removeChild(ThreeScene.renderer.domElement);
  }

  /**
   * Update scene dimensions on window resize height/width
   */
  private applyEventListeners(): void {
    window.addEventListener("resize", this.onSceneResize);
  }

  /**
   * Remove scene dimensions on window resize height/width
   */
  private removeEventListeners(): void {
    window.removeEventListener("resize", this.onSceneResize);
  }

  /**
   * Update scene dimensions on window resize
   */
  private onSceneResize = (): void => {
    ThreeScene.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    ThreeScene.camera.updateProjectionMatrix();
    ThreeScene.scene.updateMatrix();
  };

  /**
   * applies canvas to the app
   */
  private prepareContainer(): void {
    this.container.append(ThreeScene.renderer.domElement);
  }

  /**
   * Configures renderer settings
   */
  private prepareRenderer(): void {
    ThreeScene.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    ThreeScene.renderer.setPixelRatio(window.devicePixelRatio);
    ThreeScene.renderer.localClippingEnabled = false;
  }

  /**
   * Configures camera's position
   */
  private prepareCameraPosition(): void {
    ThreeScene.camera.position.z = 5;
  }

  /**
   * Applying control method
   */
  private prepareControls(): void {
    const controls = ThreeControls.orbitControl();
    controls.autoRotate = true;
    controls.update();
  }
}
