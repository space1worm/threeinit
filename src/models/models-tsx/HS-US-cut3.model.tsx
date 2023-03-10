/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-US-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002080FAFA770_IndexedFaceSet001: THREE.Mesh;
    _000002080FAFA770_IndexedFaceSet001_1: THREE.Mesh;
    _000002080FB1A4B0_IndexedFaceSet001: THREE.Mesh;
    _000002080FB1A4B0_IndexedFaceSet001_1: THREE.Mesh;
    _000002081C2C26F0_08_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000002080FAFA770.001"]: THREE.MeshStandardMaterial;
    ["_000002080FB1A4B0.001"]: THREE.MeshStandardMaterial;
    ["_000002081C2C26F0_08.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-US-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes._000002081C2C26F0_08_IndexedFaceSet.geometry}
        material={materials["_000002081C2C26F0_08.001"]}
      />
      <mesh
        geometry={nodes._000002080FAFA770_IndexedFaceSet001.geometry}
        material={materials["_000002080FAFA770.001"]}
      />
      <mesh
        geometry={nodes._000002080FAFA770_IndexedFaceSet001_1.geometry}
        material={nodes._000002080FAFA770_IndexedFaceSet001_1.material}
      />
      <mesh
        geometry={nodes._000002080FB1A4B0_IndexedFaceSet001.geometry}
        material={materials["_000002080FB1A4B0.001"]}
      />
      <mesh
        geometry={nodes._000002080FB1A4B0_IndexedFaceSet001_1.geometry}
        material={nodes._000002080FB1A4B0_IndexedFaceSet001_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-US-cut3-transformed.glb");
