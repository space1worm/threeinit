import { useGLTF } from "@react-three/drei";

const modelsUrl = import.meta.env.VITE_MODELS_PROVIDER;
/**
 *
 */
export default function preloadModels(): void {
  useGLTF.preload(`${modelsUrl}/pixel-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/sct-bar-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/sct-sidea-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/sct-sidec-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/trt-bar-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/trt-sidec-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/trt-sidea-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/pixel-pp1-side-a-cut1.glb`);
  useGLTF.preload(`${modelsUrl}/lar-emec-sidea-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/lar-emec-sidec-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/lar-hec-sidea-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/lar-hec-sidec-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/lar-fcal-sidea-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/lar-fcal-sidec-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/lar-barrel-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/tile-barrel-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/tile-end-cap-sidea-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/tile-end-cap-sidec-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/flex-chain-sec9-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/flex-chain-sec11-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/flex-chain-sec15-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-muon-sw-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-muon-cable-trays-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-muon-cable-trays-inside-barrel-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-muon-barrel-calo-ele-boxes-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-z0-sec1-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-z0-sec3-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-z0-sec5-cut3.glb`);
  useGLTF.preload(`${modelsUrl}/serv-z0-sec7-cut3.glb`);
}

export { modelsUrl };
