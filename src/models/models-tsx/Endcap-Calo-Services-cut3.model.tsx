/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Endcap-Calo-Services-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002AC08615070_IndexedFaceSet: THREE.Mesh;
    _000002AC086151C0_IndexedFaceSet: THREE.Mesh;
    _000002AC30A909F0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000002AC08615070.001"]: THREE.MeshStandardMaterial;
    ["_000002AC086151C0.001"]: THREE.MeshStandardMaterial;
    ["_000002AC30A909F0.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Endcap-Calo-Services-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000002AC08615070_IndexedFaceSet.geometry} material={materials["_000002AC08615070.001"]} />
      <mesh geometry={nodes._000002AC086151C0_IndexedFaceSet.geometry} material={materials["_000002AC086151C0.001"]} />
      <mesh geometry={nodes._000002AC30A909F0_IndexedFaceSet.geometry} material={materials["_000002AC30A909F0.001"]} />
    </group>
  );
}

useGLTF.preload("/Endcap-Calo-Services-cut3-transformed.glb");
