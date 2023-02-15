/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Lar-Barrel-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0006: THREE.Mesh;
    Mesh_2002: THREE.Mesh;
    Mesh_0003: THREE.Mesh;
  };
  materials: {
    ["Material_0.006"]: THREE.MeshStandardMaterial;
    ["Material_2.001"]: THREE.MeshStandardMaterial;
    ["Material_0.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Lar-Barrel-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0006.geometry} material={materials["Material_0.006"]} />
      <mesh geometry={nodes.Mesh_2002.geometry} material={materials["Material_2.001"]} />
      <mesh geometry={nodes.Mesh_0003.geometry} material={materials["Material_0.002"]} />
    </group>
  );
}

useGLTF.preload("/Lar-Barrel-cut3-transformed.glb");
