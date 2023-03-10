/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec9-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002388A6920D0_IndexedFaceSet: THREE.Mesh;
    _000002388D967E10_IndexedFaceSet: THREE.Mesh;
    _000002389C692870_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000002388A6920D0.001"]: THREE.MeshStandardMaterial;
    ["_000002388D967E10.001"]: THREE.MeshStandardMaterial;
    ["_000002389C692870.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec9-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000002388A6920D0_IndexedFaceSet.geometry} material={materials["_000002388A6920D0.001"]} />
      <mesh geometry={nodes._000002388D967E10_IndexedFaceSet.geometry} material={materials["_000002388D967E10.001"]} />
      <mesh geometry={nodes._000002389C692870_IndexedFaceSet.geometry} material={materials["_000002389C692870.001"]} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec9-cut1-transformed.glb");
