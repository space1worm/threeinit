import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

export class ThreeScene {
  static scene = new Scene();
  static camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  static renderer = new WebGLRenderer({ antialias: true, alpha: true });

  static setRendererSize(width: number, height: number) {
    ThreeScene.renderer.setSize(width, height);
  }
}
