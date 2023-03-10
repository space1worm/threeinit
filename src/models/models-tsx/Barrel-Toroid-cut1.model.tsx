/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Barrel-Toroid-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0011: THREE.Mesh;
    Mesh_1012: THREE.Mesh;
    Mesh_2010: THREE.Mesh;
    Mesh_3004: THREE.Mesh;
    Mesh_5001: THREE.Mesh;
  };
  materials: {
    ["Material_0.011"]: THREE.MeshStandardMaterial;
    ["Material_1.012"]: THREE.MeshStandardMaterial;
    ["Material_2.010"]: THREE.MeshStandardMaterial;
    ["Material_3.004"]: THREE.MeshStandardMaterial;
    ["Material_5.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Barrel-Toroid-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0011.geometry} material={materials["Material_0.011"]} />
      <mesh geometry={nodes.Mesh_1012.geometry} material={materials["Material_1.012"]} />
      <mesh geometry={nodes.Mesh_2010.geometry} material={materials["Material_2.010"]} />
      <mesh geometry={nodes.Mesh_3004.geometry} material={materials["Material_3.004"]} />
      <mesh geometry={nodes.Mesh_5001.geometry} material={materials["Material_5.001"]} />
    </group>
  );
}

useGLTF.preload("/Barrel-Toroid-cut1-transformed.glb");
