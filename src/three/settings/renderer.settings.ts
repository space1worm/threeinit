import { WebGLRenderer } from "three";

/**
 * Controls Application's renderer.
 */
class AppRenderer {
  private static instance: AppRenderer;
  renderer: WebGLRenderer;
  /**
   * initialize renderer
   */
  private constructor() {
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
  }

  /**
   * Singelton
   *
   * @returns {AppRenderer} AppRenderer class
   */
  static getInstance(): AppRenderer {
    if (AppRenderer.instance) return AppRenderer.instance;

    AppRenderer.instance = new AppRenderer();
    return AppRenderer.instance;
  }

  /**
   * Resize's canvas based of the container's width/height.
   *
   * @param {offsetWidth} offsetWidth of the container
   * @param {offsetHeight} offsetHeight of the container
   */
  public setRendererSize(offsetWidth: number, offsetHeight: number): void {
    this.renderer.setSize(offsetWidth, offsetHeight);
  }

  /**
   *Sets device pixel ratio. This is usually used for HiDPI device to prevent blurring output canvas.
   *
   * @param pixelRation
   */
  public setPixelRatio(pixelRation: number): void {
    this.renderer.setPixelRatio(pixelRation);
  }

  /**
   * resize renderer's dimensions on window resize.
   *
   * @param {number} offsetWidth on window resize update renderer's dimension.
   * @param {number} offsetHeight on window resize update renderer's dimension.
   */
  public onWindowResize = (offsetWidth: number, offsetHeight: number): void => {
    this.setRendererSize(offsetWidth, offsetHeight);
  };
}

const rendererSettings = AppRenderer.getInstance();
export default rendererSettings;
