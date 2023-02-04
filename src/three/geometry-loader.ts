import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Settings from "./settings";

/**
 *
 */
class GeometryLoader {
  private static instance: GeometryLoader;
  private loader = new GLTFLoader();
  private path: string;

  /**
   *
   * @param p
   */
  private constructor(p: string) {
    this.path = p;
  }

  /**
   * Singelton
   *
   * @param {string} geometriesFolderPath path to fetch geometries.
   * @returns { GeometryLoader } GeometryLoader instance
   */
  static getInstance(geometriesFolderPath: string): GeometryLoader {
    if (GeometryLoader.instance) return GeometryLoader.instance;

    GeometryLoader.instance = new GeometryLoader(geometriesFolderPath);
    return GeometryLoader.instance;
  }

  /**
   *
   * @param geometryName
   * @param wireframe
   * @param opacity
   */
  loadGeomtry(geometryName: string): void {
    this.loader.load(this.path + geometryName + ".glb", (glb) => {
      const geometry = glb.scene;

      // geometry.traverse((childGeometry) => {
      //   // if (childGeometry.isMesh) {
      //   //   childGeometry.material.metalness = null;
      //   //   childGeometry.material.transparent = true;
      //   // }
      // });

      Settings.sceneSettings.scene.add(geometry);
    });
  }

  //   loadGeometries(geometriesName: string[]): void {}
  //   removeGeometry(geoName: string): void {}
  //   removeGeometries(geometriesName: string[]): void {}
}

const loader = GeometryLoader.getInstance("/src/geometries/");
export default loader;
