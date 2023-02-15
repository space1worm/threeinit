/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Cavern-HO-SideA-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    S__000001C69006A490: THREE.Mesh;
  };
  materials: {
    Material__000001C69006A490: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Cavern-HO-SideA-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.S__000001C69006A490.geometry} material={materials.Material__000001C69006A490} />
    </group>
  );
}

useGLTF.preload("/Cavern-HO-SideA-cut4-transformed.glb");