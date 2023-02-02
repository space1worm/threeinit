import { PerspectiveCamera, OrthographicCamera } from "three";

/**
 * see more at : https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
 *
 * @param {number} fov  Camera frustum vertical field of view.
 * @param {number} aspect Camera frustum aspect ratio.
 * @param {number} near  Camera frustum near plane.
 * @param {number} far Camera frustum far plane.
 * @returns {PerspectiveCamera} object
 */
export const perspectiveCamera = (fov: number, aspect: number, near: number, far: number): PerspectiveCamera =>
  new PerspectiveCamera(fov, aspect, near, far);

/**
 * see more at https://threejs.org/docs/?q=ortho#api/en/cameras/OrthographicCamera
 *
 * @param {number} left   Camera frustum left plane.
 * @param {number} right Camera frustum right plane.
 * @param {number} top Camera frustum top plane.
 * @param {number} bottom Camera frustum bottom plane.
 * @param {number} near Camera frustum near plane.
 * @param {number} far Camera frustum far plane.
 * @returns {OrthographicCamera} object
 */
export const orthographicCamera = (
  left: number,
  right: number,
  top: number,
  bottom: number,
  near: number,
  far: number,
): OrthographicCamera => new OrthographicCamera(left, right, top, bottom, near, far);
