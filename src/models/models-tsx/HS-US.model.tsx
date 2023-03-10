/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-US.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001E91E83DB00_IndexedFaceSet003: THREE.Mesh;
    _000001E91E83DB00_IndexedFaceSet003_1: THREE.Mesh;
    _000001E91EBDBDD0_IndexedFaceSet003: THREE.Mesh;
    _000001E91EBDBDD0_IndexedFaceSet003_1: THREE.Mesh;
    _000001E91FBB6050_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000001E91E83DB00.003"]: THREE.MeshStandardMaterial;
    ["_000001E91EBDBDD0.003"]: THREE.MeshStandardMaterial;
    ["_000001E91FBB6050.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-US-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000001E91FBB6050_IndexedFaceSet.geometry} material={materials["_000001E91FBB6050.003"]} />
      <mesh
        geometry={nodes._000001E91E83DB00_IndexedFaceSet003.geometry}
        material={materials["_000001E91E83DB00.003"]}
      />
      <mesh
        geometry={nodes._000001E91E83DB00_IndexedFaceSet003_1.geometry}
        material={nodes._000001E91E83DB00_IndexedFaceSet003_1.material}
      />
      <mesh
        geometry={nodes._000001E91EBDBDD0_IndexedFaceSet003.geometry}
        material={materials["_000001E91EBDBDD0.003"]}
      />
      <mesh
        geometry={nodes._000001E91EBDBDD0_IndexedFaceSet003_1.geometry}
        material={nodes._000001E91EBDBDD0_IndexedFaceSet003_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-US-transformed.glb");
