import { DirectionalLight, PointLight, AmbientLight } from "three";

import { HEX } from "../app.types";

/**
 * Provides different types of lights
 */
export default class Lights {
  /**
   * see more at : https://threejs.org/docs/?q=Direct#api/en/lights/DirectionalLight
   *
   * @param {HEX} color of the light
   * @param {number} intensity  from 0-1 where 1 is the highest intensity.
   * @returns {DirectionalLight} Object
   */
  static directionalLight(color: HEX, intensity: number): DirectionalLight {
    return new DirectionalLight(color, intensity);
  }
  /**
   * see more at : https://threejs.org/docs/?q=Ambie#api/en/lights/AmbientLight
   *
   * @param {HEX} color of the light
   * @param {number} intensity from 0-1 where 1 is the highest intensity.
   * @returns {AmbientLight} object
   */
  static ambientLight(color: HEX, intensity: number): AmbientLight {
    return new AmbientLight(color, intensity);
  }
  /**
   * see more at :  https://threejs.org/docs/?q=point#api/en/lights/PointLight
   *
   * @param {HEX} color of the light
   * @param {number} intensity from 0-1 where 1 is the highest intensity.
   * @param {number} distance distance from 0-infinity from the z0
   * @returns {PointLight} object
   */
  static pointLight(color: HEX, intensity: number, distance: number): PointLight {
    return new PointLight(color, intensity, distance);
  }

  /**
   * Singelton Class
   */
  private constructor() {
    // do nothing
  }
}
