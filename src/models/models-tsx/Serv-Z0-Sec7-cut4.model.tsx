/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec7-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002AE36867790_IndexedFaceSet: THREE.Mesh;
    _000002AE36867A30_IndexedFaceSet: THREE.Mesh;
    _000002AE36867F70_IndexedFaceSet: THREE.Mesh;
    _000002AE368680C0_IndexedFaceSet: THREE.Mesh;
    _000002AE36868210_IndexedFaceSet: THREE.Mesh;
    _000001D9CCAB8630_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _000002AE36867790: THREE.MeshStandardMaterial;
    _000002AE36867A30: THREE.MeshStandardMaterial;
    _000002AE36867F70: THREE.MeshStandardMaterial;
    _000002AE368680C0: THREE.MeshStandardMaterial;
    _000002AE36868210: THREE.MeshStandardMaterial;
    _000001D9CCAB8630: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec7-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000002AE36867790_IndexedFaceSet.geometry} material={materials._000002AE36867790} />
      <mesh geometry={nodes._000002AE36867A30_IndexedFaceSet.geometry} material={materials._000002AE36867A30} />
      <mesh geometry={nodes._000002AE36867F70_IndexedFaceSet.geometry} material={materials._000002AE36867F70} />
      <mesh geometry={nodes._000002AE368680C0_IndexedFaceSet.geometry} material={materials._000002AE368680C0} />
      <mesh geometry={nodes._000002AE36868210_IndexedFaceSet.geometry} material={materials._000002AE36868210} />
      <mesh geometry={nodes._000001D9CCAB8630_IndexedFaceSet.geometry} material={materials._000001D9CCAB8630} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec7-cut4-transformed.glb");
