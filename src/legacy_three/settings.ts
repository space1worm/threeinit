import sceneSettings from "./settings/scene.settings";
import cameraSettings from "./settings/camera.settings";
import rendererSettings from "./settings/renderer.settings";
import animationSettings from "./settings/animation.settings";
import listenersSettings from "./settings/listeners.settings";
import controlsSettings from "./settings/controls.settings";

/**
 * Provides all global objects related to three App.
 */
class AppSettings {
  private static instance: AppSettings;
  sceneSettings = sceneSettings;
  cameraSettings = cameraSettings;
  rendererSettings = rendererSettings;
  listenersSettings = listenersSettings;
  animationSettings = animationSettings;
  controlsSettings = controlsSettings;

  /**
   *
   */
  private constructor() {
    // do nothing.
  }

  /**
   * resizes scene's renderer's and camera's matrix on windowResize.
   *
   * @param {offsetWidth} offsetWidth of the container
   * @param {offsetHeight} offsetHeight of the container
   */
  public onWindowResize(offsetWidth: number, offsetHeight: number): void {
    this.rendererSettings.onWindowResize(offsetWidth, offsetHeight);
    this.cameraSettings.onWindowResize(offsetWidth / offsetHeight);
    this.sceneSettings.onWindowResize();
  }

  /**
   * Singelton
   *
   * @returns {AppSettings} AppSettings instance
   */
  static getInstance(): AppSettings {
    if (AppSettings.instance) return AppSettings.instance;

    AppSettings.instance = new AppSettings();
    return AppSettings.instance;
  }
}

const Settings = AppSettings.getInstance();
export default Settings;
