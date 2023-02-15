/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Tile-End-Cap-SideA.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0007: THREE.Mesh;
    Mesh_1007: THREE.Mesh;
    Mesh_2002: THREE.Mesh;
  };
  materials: {
    ["Material_0.130"]: THREE.MeshStandardMaterial;
    ["Material_1.094"]: THREE.MeshStandardMaterial;
    ["Material_2.038"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Tile-End-Cap-SideA-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0007.geometry} material={materials["Material_0.130"]} />
      <mesh geometry={nodes.Mesh_1007.geometry} material={materials["Material_1.094"]} />
      <mesh geometry={nodes.Mesh_2002.geometry} material={materials["Material_2.038"]} />
    </group>
  );
}

useGLTF.preload("/Tile-End-Cap-SideA-transformed.glb");