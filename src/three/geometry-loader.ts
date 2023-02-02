import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
/**
 *
 */
export default class GeometryLoader {
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

  //   loadGeomtry(geometryName: string): void {}
  //   loadGeometries(geometriesName: string[]): void {}
  //   removeGeometry(geoName: string): void {}
  //   removeGeometries(geometriesName: string[]): void {}
}
