/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HO-side-C-Services-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000002C6AF70C130_IndexedFaceSet: THREE.Mesh;
    _000002C6B32034A0_IndexedFaceSet: THREE.Mesh;
    _000002C6B32088A0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _000002C6AF70C130: THREE.MeshStandardMaterial;
    _000002C6B32034A0: THREE.MeshStandardMaterial;
    _000002C6B32088A0: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HO-side-C-Services-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000002C6AF70C130_IndexedFaceSet.geometry} material={materials._000002C6AF70C130} />
      <mesh geometry={nodes._000002C6B32034A0_IndexedFaceSet.geometry} material={materials._000002C6B32034A0} />
      <mesh geometry={nodes._000002C6B32088A0_IndexedFaceSet.geometry} material={materials._000002C6B32088A0} />
    </group>
  );
}

useGLTF.preload("/HO-side-C-Services-cut1-transformed.glb");
