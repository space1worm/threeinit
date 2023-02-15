import { useGLTF } from "@react-three/drei";

/**
 *
 */
export default function preloadModels(): void {
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/pixel-cut3.glb`);
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/sct-bar-cut3.glb`);
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/sct-sidea-cut3.glb`);
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/sct-sidec-cut3.glb`);
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/trt-bar-cut3.glb`);
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/trt-sidec-cut3.glb`);
  useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/trt-sidea-cut3.glb`);
}
