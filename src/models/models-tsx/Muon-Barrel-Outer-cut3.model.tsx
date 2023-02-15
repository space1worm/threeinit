/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Muon-Barrel-Outer-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0011: THREE.Mesh;
    Mesh_1009: THREE.Mesh;
  };
  materials: {
    ["Material_0.048"]: THREE.MeshStandardMaterial;
    ["Material_1.030"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Muon-Barrel-Outer-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0011.geometry} material={materials["Material_0.048"]} />
      <mesh geometry={nodes.Mesh_1009.geometry} material={materials["Material_1.030"]} />
    </group>
  );
}

useGLTF.preload("/Muon-Barrel-Outer-cut3-transformed.glb");
