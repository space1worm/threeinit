/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HO-Side-A-Platforms.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _0000015BB4006200_IndexedFaceSet: THREE.Mesh;
    _0000015BB4008420_IndexedFaceSet: THREE.Mesh;
    _0000015BB4008570_IndexedFaceSet: THREE.Mesh;
    _0000015BB400BB40_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _0000015BB4006200: THREE.MeshStandardMaterial;
    _0000015BB4008420: THREE.MeshStandardMaterial;
    _0000015BB4008570: THREE.MeshStandardMaterial;
    _0000015BB400BB40: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HO-Side-A-Platforms-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._0000015BB4006200_IndexedFaceSet.geometry} material={materials._0000015BB4006200} />
      <mesh geometry={nodes._0000015BB4008420_IndexedFaceSet.geometry} material={materials._0000015BB4008420} />
      <mesh geometry={nodes._0000015BB4008570_IndexedFaceSet.geometry} material={materials._0000015BB4008570} />
      <mesh geometry={nodes._0000015BB400BB40_IndexedFaceSet.geometry} material={materials._0000015BB400BB40} />
    </group>
  );
}

useGLTF.preload("/HO-Side-A-Platforms-transformed.glb");
