import AppCamera from "./camera.settings";
import AppRenderer from "./renderer.settings";
import AppScene from "./scene.settings";

/**
 * Controls all event listeners which is related to three App.
 */
export default class AppListeners {
  private static instance: AppListeners;
  /**
   * Singelton
   */
  private constructor() {
    // do nothing
  }

  /**
   * singelton
   *
   * @returns { AppListeners } AppListeners instance
   */
  static getInstance(): AppListeners {
    if (AppListeners.instance) return AppListeners.instance;

    AppListeners.instance = new AppListeners();
    return AppListeners.instance;
  }

  /**
   * Applies all event listeners.
   *
   * @param {HTMLDivElement} container Parent of the canvas
   */
  public applyListeners(container: HTMLDivElement): void {
    this.applyEventListeners(container);
  }

  /**
   * Removes all event listeners.
   *
   * @param {HTMLDivElement} container Parent of the canvas
   */
  public removeListeners(container: HTMLDivElement): void {
    this.removeEventListeners(container);
  }

  /**
   * Activates this function to update all of the dimensions of the app on resize event
   *
   * @param {number} offsetWidth width
   * @param {number} offsetHeight height
   */
  private onWindowResize = (offsetWidth: number, offsetHeight: number): void => {
    AppRenderer.getInstance().onWindowResize(offsetWidth, offsetHeight);
    AppCamera.getInstance().onWindowResize(offsetWidth / offsetHeight);
    AppScene.getInstance().onWindowResize();
  };

  /**
   * Encapsulates the data and pass it to down onWindowResize function
   *
   * @param {HTMLDivElement} container Parent of the canvas
   */
  private factory = (container: HTMLDivElement): void => {
    const [width, height] = [container.offsetWidth, container.offsetHeight];
    this.onWindowResize(width, height);
  };

  /**
   * Update scene dimensions on window resize height/width
   *
   * @param {HTMLDivElement} container Parent of the canvas
   */
  private applyEventListeners(container: HTMLDivElement): void {
    window.addEventListener("resize", this.factory.bind(null, container));
  }

  /**
   * Remove scene dimensions on window resize height/width
   *
   * @param {HTMLDivElement} container Parent of the canvas
   */
  private removeEventListeners(container: HTMLDivElement): void {
    window.removeEventListener("resize", this.factory.bind(null, container));
  }
}
