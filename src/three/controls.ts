import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { Camera } from "three";

/**
 * returns control type
 *
 * @param {Camera} camera camera
 * @param {HTMLElement} domElement domElement
 * @returns {OrbitControls} threeJs controller type
 */
export const orbitControl = (camera: Camera, domElement: HTMLElement | undefined): OrbitControls =>
  new OrbitControls(camera, domElement);

/**
 * returns control type
 *
 * @param {Camera} camera camera
 * @param {HTMLElement} domElement domElement
 * @returns {FlyControls} threeJs controller type
 */
export const flyControl = (camera: Camera, domElement: HTMLElement | undefined): FlyControls =>
  new FlyControls(camera, domElement);
