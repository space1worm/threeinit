/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec11-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _00000238950B2080_IndexedFaceSet: THREE.Mesh;
    _000002389F990130_IndexedFaceSet: THREE.Mesh;
    _000002389F99EAD0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec11-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._00000238950B2080_IndexedFaceSet.geometry} material={materials["Material.014"]} />
      <mesh geometry={nodes._000002389F990130_IndexedFaceSet.geometry} material={materials["Material.012"]} />
      <mesh geometry={nodes._000002389F99EAD0_IndexedFaceSet.geometry} material={materials["Material.013"]} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec11-cut1-transformed.glb");
