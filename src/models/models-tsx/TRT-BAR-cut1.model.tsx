/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/TRT-BAR-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1006: THREE.Mesh;
    Mesh_2: THREE.Mesh;
  };
  materials: {
    ["Material_1.106"]: THREE.MeshStandardMaterial;
    ["Material_2.045"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/TRT-BAR-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_1006.geometry} material={materials["Material_1.106"]} />
      <mesh geometry={nodes.Mesh_2.geometry} material={materials["Material_2.045"]} />
    </group>
  );
}

useGLTF.preload("/TRT-BAR-cut1-transformed.glb");