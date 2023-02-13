import Settings from "../settings";
/**
 * Controls all event listeners which is related to three App.
 */
class AppListeners {
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
    Settings.onWindowResize(offsetWidth, offsetHeight);
  };

  /**
   * Encapsulates the data and pass it to down onWindowResize function
   *
   * @param {HTMLDivElement} container Parent of the canvas
   */
  private factory = (container: HTMLDivElement): void => {
    const [offsetWidth, offsetHeight] = [container.offsetWidth, container.offsetHeight];
    this.onWindowResize(offsetWidth, offsetHeight);
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

const listenerSettings = AppListeners.getInstance();
export default listenerSettings;
