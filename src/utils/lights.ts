import { DirectionalLight, PointLight, AmbientLight } from "three";

import { HEX } from "../app.types";

/**
 * see more at : https://threejs.org/docs/?q=Direct#api/en/lights/DirectionalLight
 *
 * @param {HEX} color of the light
 * @param {number} intensity  from 0-1 where 1 is the highest intensity.
 * @returns {DirectionalLight} Object
 */
export const directionalLight = (color: HEX, intensity: number): DirectionalLight =>
  new DirectionalLight(color, intensity);

/**
 * see more at : https://threejs.org/docs/?q=Ambie#api/en/lights/AmbientLight
 *
 * @param {HEX} color of the light
 * @param {number} intensity from 0-1 where 1 is the highest intensity.
 * @returns {AmbientLight} object
 */
export const ambientLight = (color: HEX, intensity: number): AmbientLight => new AmbientLight(color, intensity);

/**
 * see more at :  https://threejs.org/docs/?q=point#api/en/lights/PointLight
 *
 * @param {HEX} color of the light
 * @param {number} intensity from 0-1 where 1 is the highest intensity.
 * @param {number} distance distance from 0-infinity from the z0
 * @returns {PointLight} object
 */
export const pointLight = (color: HEX, intensity: number, distance: number): PointLight =>
  new PointLight(color, intensity, distance);
