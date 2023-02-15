/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Flex-Chain-Sec11-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001F28AB8E270_IndexedFaceSet: THREE.Mesh;
    _000001F28AB8E3C0_IndexedFaceSet: THREE.Mesh;
    _000001F28AD272D0_IndexedFaceSet: THREE.Mesh;
    _000001F28AD283E0_IndexedFaceSet: THREE.Mesh;
    _000001F2A0269FF0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _000001F28AB8E270: THREE.MeshStandardMaterial;
    _000001F28AB8E3C0: THREE.MeshStandardMaterial;
    _000001F28AD272D0: THREE.MeshStandardMaterial;
    _000001F28AD283E0: THREE.MeshStandardMaterial;
    _000001F2A0269FF0: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Flex-Chain-Sec11-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000001F28AB8E270_IndexedFaceSet.geometry} material={materials._000001F28AB8E270} />
      <mesh geometry={nodes._000001F28AB8E3C0_IndexedFaceSet.geometry} material={materials._000001F28AB8E3C0} />
      <mesh geometry={nodes._000001F28AD272D0_IndexedFaceSet.geometry} material={materials._000001F28AD272D0} />
      <mesh geometry={nodes._000001F28AD283E0_IndexedFaceSet.geometry} material={materials._000001F28AD283E0} />
      <mesh geometry={nodes._000001F2A0269FF0_IndexedFaceSet.geometry} material={materials._000001F2A0269FF0} />
    </group>
  );
}

useGLTF.preload("/Flex-Chain-Sec11-cut3-transformed.glb");
