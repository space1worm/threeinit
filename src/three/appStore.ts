import AppCamera from "./settings/camera.settings";
import AppRenderer from "./settings/renderer.settings";
import AppAnimation from "./settings/animation.settings";
import AppListeners from "./settings/listeners.settings";
import AppControls from "./settings/controls.settings";

/**
 * Provides all global objects related to three App.
 */
export default class AppStore {
  private static instance: AppStore;
  cameraSettings = AppCamera.getInstance();
  rendererSettings = AppRenderer.getInstance();
  listenersSettings = AppListeners.getInstance();
  animationSettings = AppAnimation.getInstance();
  controlsSettings = AppControls.getInstance();

  /**
   *
   */
  private constructor() {
    // do nothing.
  }

  /**
   * Singelton
   *
   * @returns {AppStore} AppStore instance
   */
  static getInstance(): AppStore {
    if (AppStore.instance) return AppStore.instance;

    AppStore.instance = new AppStore();
    return AppStore.instance;
  }
}
