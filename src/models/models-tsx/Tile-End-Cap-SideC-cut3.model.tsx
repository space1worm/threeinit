/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Tile-End-Cap-SideC-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0018: THREE.Mesh;
    Mesh_1019: THREE.Mesh;
    Mesh_2013: THREE.Mesh;
  };
  materials: {
    ["Material_0.136"]: THREE.MeshStandardMaterial;
    ["Material_1.100"]: THREE.MeshStandardMaterial;
    ["Material_2.044"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Tile-End-Cap-SideC-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0018.geometry} material={materials["Material_0.136"]} />
      <mesh geometry={nodes.Mesh_1019.geometry} material={materials["Material_1.100"]} />
      <mesh geometry={nodes.Mesh_2013.geometry} material={materials["Material_2.044"]} />
    </group>
  );
}

useGLTF.preload("/Tile-End-Cap-SideC-cut3-transformed.glb");