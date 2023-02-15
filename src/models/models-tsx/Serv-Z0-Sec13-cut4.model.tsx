/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec13-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _0000021322B90290_IndexedFaceSet: THREE.Mesh;
    _0000021322B93080_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _0000021322B90290: THREE.MeshStandardMaterial;
    _0000021322B93080: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec13-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._0000021322B90290_IndexedFaceSet.geometry} material={materials._0000021322B90290} />
      <mesh geometry={nodes._0000021322B93080_IndexedFaceSet.geometry} material={materials._0000021322B93080} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec13-cut4-transformed.glb");
