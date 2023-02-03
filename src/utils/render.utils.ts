import rendererSettings from "../three/settings/renderer.settings";
import sceneSettings from "../three/settings/scene.settings";
import cameraSettings from "../three/settings/camera.settings";

/**
 * Provides renderer function of the app
 */
export default function render(): void {
  rendererSettings.renderer.render(sceneSettings.scene, cameraSettings.camera);
}
