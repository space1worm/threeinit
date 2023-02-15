/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec3-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {};
  materials: {};
};

/**
 *
 * @param props
 */
export function ServZ0Sec3Cut3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(`${modelsUrl}/serv-z0-sec3-cut3.glb`) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group />
    </group>
  );
}
