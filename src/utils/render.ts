import AppCamera from "../three/camera";
import AppRenderer from "../three/renderer";
import AppScene from "../three/scene";

const rendererSettings = AppRenderer.getInstance();
const cameraSettings = AppCamera.getInstance();
const sceneSettings = AppScene.getInstance();

/**
 * Provides renderer function of the app
 */
export default function render(): void {
  rendererSettings.renderer.render(sceneSettings.scene, cameraSettings.camera);
}
