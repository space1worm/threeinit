import rendererSettings from "../legacy_three/settings/renderer.settings";
import sceneSettings from "../legacy_three/settings/scene.settings";
import cameraSettings from "../legacy_three/settings/camera.settings";

/**
 * Provides renderer function of the app
 */
export default function render(): void {
  rendererSettings.renderer.render(sceneSettings.scene, cameraSettings.camera);
}
