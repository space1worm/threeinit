/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Access-Platforms-Even-Sectors-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Handrail002: THREE.Mesh;
    Floor002: THREE.Mesh;
    construct002: THREE.Mesh;
  };
  materials: {
    _00000237D941F9C0: THREE.MeshStandardMaterial;
    _00000237D9420830: THREE.MeshStandardMaterial;
    _00000237D9421550: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Access-Platforms-Even-Sectors-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Handrail002.geometry} material={materials._00000237D941F9C0} />
      <mesh geometry={nodes.Floor002.geometry} material={materials._00000237D9420830} />
      <mesh geometry={nodes.construct002.geometry} material={materials._00000237D9421550} />
    </group>
  );
}

useGLTF.preload("/Access-Platforms-Even-Sectors-cut2-transformed.glb");
