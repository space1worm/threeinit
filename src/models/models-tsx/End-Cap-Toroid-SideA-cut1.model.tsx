/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/End-Cap-Toroid-SideA-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {};
  materials: {};
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/End-Cap-Toroid-SideA-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group />
    </group>
  );
}

useGLTF.preload("/End-Cap-Toroid-SideA-cut1-transformed.glb");
