/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec7-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001282E417840_IndexedFaceSet: THREE.Mesh;
    _000001282E418800_IndexedFaceSet: THREE.Mesh;
    _000001282E418950_IndexedFaceSet: THREE.Mesh;
    _000001282E419520_IndexedFaceSet: THREE.Mesh;
    _000001282E419BB0_IndexedFaceSet: THREE.Mesh;
    _000001D9CCAB3770_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _000001282E417840: THREE.MeshStandardMaterial;
    _000001282E418800: THREE.MeshStandardMaterial;
    _000001282E418950: THREE.MeshStandardMaterial;
    _000001282E419520: THREE.MeshStandardMaterial;
    _000001282E419BB0: THREE.MeshStandardMaterial;
    _000001D9CCAB3770: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec7-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000001282E417840_IndexedFaceSet.geometry} material={materials._000001282E417840} />
      <mesh geometry={nodes._000001282E418800_IndexedFaceSet.geometry} material={materials._000001282E418800} />
      <mesh geometry={nodes._000001282E418950_IndexedFaceSet.geometry} material={materials._000001282E418950} />
      <mesh geometry={nodes._000001282E419520_IndexedFaceSet.geometry} material={materials._000001282E419520} />
      <mesh geometry={nodes._000001282E419BB0_IndexedFaceSet.geometry} material={materials._000001282E419BB0} />
      <mesh geometry={nodes._000001D9CCAB3770_IndexedFaceSet.geometry} material={materials._000001D9CCAB3770} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec7-cut3-transformed.glb");