/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Extra-Wheel-SideC-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0005: THREE.Mesh;
    Mesh_1005: THREE.Mesh;
  };
  materials: {
    ["Material_0.007"]: THREE.MeshStandardMaterial;
    ["Material_1.007"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Extra-Wheel-SideC-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0005.geometry} material={materials["Material_0.007"]} />
      <mesh geometry={nodes.Mesh_1005.geometry} material={materials["Material_1.007"]} />
    </group>
  );
}

useGLTF.preload("/Extra-Wheel-SideC-cut3-transformed.glb");
