import { Canvas } from "@react-three/fiber";

import Lights from "./Light.three";
import Camera from "./Camera.three";
import Fog from "./Fog.three";
import CustomGrid from "./Grid.three";
import CustomOrbitControls from "./OrbitControls.three";
import EnvironmentThree from "./Environment.three";

import InnerDetector from "./detector-parts/InnerDetector.three";

/**
 *
 */
export default function Scene(): JSX.Element {
  return (
    <Canvas>
      <Lights />
      <Camera />
      <Fog />
      <InnerDetector />
      <CustomGrid />
      <CustomOrbitControls />
      <EnvironmentThree />
    </Canvas>
  );
}
