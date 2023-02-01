import {
    Scene,
    PerspectiveCamera,
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    WebGLRenderer,
} from "three";

const scene = new Scene();
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
export const rendererDomElement = renderer.domElement;
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let animation: number;

export function animate() {
    animation = requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
export function stopAnimation() {
    cancelAnimationFrame(animation);
}
