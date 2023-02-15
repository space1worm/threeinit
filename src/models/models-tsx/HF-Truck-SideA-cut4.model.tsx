/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HF-Truck-SideA-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _0000015713ADAC90_001_IndexedFaceSet: THREE.Mesh;
    _00000157163239A0_IndexedFaceSet: THREE.Mesh;
    _0000015716325BC0_IndexedFaceSet: THREE.Mesh;
    _0000015721109310_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_0000015713ADAC90_001.002"]: THREE.MeshStandardMaterial;
    ["_00000157163239A0.002"]: THREE.MeshStandardMaterial;
    ["_0000015716325BC0.002"]: THREE.MeshStandardMaterial;
    ["_0000015721109310.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HF-Truck-SideA-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes._0000015713ADAC90_001_IndexedFaceSet.geometry}
        material={materials["_0000015713ADAC90_001.002"]}
      />
      <mesh geometry={nodes._00000157163239A0_IndexedFaceSet.geometry} material={materials["_00000157163239A0.002"]} />
      <mesh geometry={nodes._0000015716325BC0_IndexedFaceSet.geometry} material={materials["_0000015716325BC0.002"]} />
      <mesh geometry={nodes._0000015721109310_IndexedFaceSet.geometry} material={materials["_0000015721109310.002"]} />
    </group>
  );
}

useGLTF.preload("/HF-Truck-SideA-cut4-transformed.glb");
