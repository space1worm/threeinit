/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec5-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002194923BD20_IndexedFaceSet: THREE.Mesh;
    _0000021952A91740_IndexedFaceSet: THREE.Mesh;
    _000002195EAE92E0_IndexedFaceSet: THREE.Mesh;
    _000002195EAE92E0_011_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _000002194923BD20: THREE.MeshStandardMaterial;
    _0000021952A91740: THREE.MeshStandardMaterial;
    _000002195EAE92E0: THREE.MeshStandardMaterial;
    _000002195EAE92E0_011: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec5-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000002194923BD20_IndexedFaceSet.geometry} material={materials._000002194923BD20} />
      <mesh geometry={nodes._0000021952A91740_IndexedFaceSet.geometry} material={materials._0000021952A91740} />
      <mesh geometry={nodes._000002195EAE92E0_IndexedFaceSet.geometry} material={materials._000002195EAE92E0} />
      <mesh geometry={nodes._000002195EAE92E0_011_IndexedFaceSet.geometry} material={materials._000002195EAE92E0_011} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec5-cut1-transformed.glb");
