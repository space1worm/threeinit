/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Outer-Wheel-SideA-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0007: THREE.Mesh;
    Mesh_1007: THREE.Mesh;
  };
  materials: {
    ["Material_0.056"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Outer-Wheel-SideA-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0007.geometry} material={materials["Material_0.056"]} />
      <mesh geometry={nodes.Mesh_1007.geometry} material={materials["Material_0.056"]} />
    </group>
  );
}

useGLTF.preload("/Outer-Wheel-SideA-cut2-transformed.glb");