/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HO-side-A-Services.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002C6AF6FC7D0_IndexedFaceSet: THREE.Mesh;
    _000002C6AF70C670_IndexedFaceSet: THREE.Mesh;
    _000002C6AF711920_IndexedFaceSet: THREE.Mesh;
    _000002C6AF711D10_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000002C6AF6FC7D0.002"]: THREE.MeshStandardMaterial;
    ["_000002C6AF70C670.002"]: THREE.MeshStandardMaterial;
    ["_000002C6AF711920.002"]: THREE.MeshStandardMaterial;
    ["_000002C6AF711D10.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HO-side-A-Services-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000002C6AF6FC7D0_IndexedFaceSet.geometry} material={materials["_000002C6AF6FC7D0.002"]} />
      <mesh geometry={nodes._000002C6AF70C670_IndexedFaceSet.geometry} material={materials["_000002C6AF70C670.002"]} />
      <mesh geometry={nodes._000002C6AF711920_IndexedFaceSet.geometry} material={materials["_000002C6AF711920.002"]} />
      <mesh geometry={nodes._000002C6AF711D10_IndexedFaceSet.geometry} material={materials["_000002C6AF711D10.002"]} />
    </group>
  );
}

useGLTF.preload("/HO-side-A-Services-transformed.glb");
