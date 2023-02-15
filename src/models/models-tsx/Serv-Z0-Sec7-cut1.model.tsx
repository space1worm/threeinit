/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec7-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _00000219002332B0_IndexedFaceSet: THREE.Mesh;
    _000002190023CC40_022_IndexedFaceSet: THREE.Mesh;
    _0000021901894720_IndexedFaceSet: THREE.Mesh;
    _0000021903917500_IndexedFaceSet: THREE.Mesh;
    _000002195B7FC0A0_IndexedFaceSet: THREE.Mesh;
    _000001D9CF808CE0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _00000219002332B0: THREE.MeshStandardMaterial;
    _000002190023CC40_022: THREE.MeshStandardMaterial;
    _0000021901894720: THREE.MeshStandardMaterial;
    _0000021903917500: THREE.MeshStandardMaterial;
    _000002195B7FC0A0: THREE.MeshStandardMaterial;
    _000001D9CF808CE0: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec7-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._00000219002332B0_IndexedFaceSet.geometry} material={materials._00000219002332B0} />
      <mesh geometry={nodes._000002190023CC40_022_IndexedFaceSet.geometry} material={materials._000002190023CC40_022} />
      <mesh geometry={nodes._0000021901894720_IndexedFaceSet.geometry} material={materials._0000021901894720} />
      <mesh geometry={nodes._0000021903917500_IndexedFaceSet.geometry} material={materials._0000021903917500} />
      <mesh geometry={nodes._000002195B7FC0A0_IndexedFaceSet.geometry} material={materials._000002195B7FC0A0} />
      <mesh geometry={nodes._000001D9CF808CE0_IndexedFaceSet.geometry} material={materials._000001D9CF808CE0} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec7-cut1-transformed.glb");
