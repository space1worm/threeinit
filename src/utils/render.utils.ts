import AppCamera from "../three/settings/camera.settings";
import AppRenderer from "../three/settings/renderer.settings";
import AppScene from "../three/settings/scene.settings";

const rendererSettings = AppRenderer.getInstance();
const cameraSettings = AppCamera.getInstance();
const sceneSettings = AppScene.getInstance();

/**
 * Provides renderer function of the app
 */
export default function render(): void {
  rendererSettings.renderer.render(sceneSettings.scene, cameraSettings.camera);
}
