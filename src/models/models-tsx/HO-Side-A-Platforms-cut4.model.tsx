/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HO-Side-A-Platforms-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _0000011F86E3EF30_IndexedFaceSet: THREE.Mesh;
    _0000011FC9D9CF70_IndexedFaceSet: THREE.Mesh;
    _0000011FC9D9D210_IndexedFaceSet: THREE.Mesh;
    _0000011FC9D9D4B0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_0000011F86E3EF30.001"]: THREE.MeshStandardMaterial;
    ["_0000011FC9D9CF70.001"]: THREE.MeshStandardMaterial;
    ["_0000011FC9D9D210.001"]: THREE.MeshStandardMaterial;
    ["_0000011FC9D9D4B0.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HO-Side-A-Platforms-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._0000011F86E3EF30_IndexedFaceSet.geometry} material={materials["_0000011F86E3EF30.001"]} />
      <mesh geometry={nodes._0000011FC9D9CF70_IndexedFaceSet.geometry} material={materials["_0000011FC9D9CF70.001"]} />
      <mesh geometry={nodes._0000011FC9D9D210_IndexedFaceSet.geometry} material={materials["_0000011FC9D9D210.001"]} />
      <mesh geometry={nodes._0000011FC9D9D4B0_IndexedFaceSet.geometry} material={materials["_0000011FC9D9D4B0.001"]} />
    </group>
  );
}

useGLTF.preload("/HO-Side-A-Platforms-cut4-transformed.glb");
