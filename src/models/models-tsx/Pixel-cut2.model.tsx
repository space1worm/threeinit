/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Pixel-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_2002: THREE.Mesh;
    Mesh_3002: THREE.Mesh;
    Mesh_4002: THREE.Mesh;
    Mesh_5001: THREE.Mesh;
    Mesh_6001: THREE.Mesh;
  };
  materials: {
    ["Material_2.017"]: THREE.MeshStandardMaterial;
    ["Material_3.013"]: THREE.MeshStandardMaterial;
    ["Material_4.018"]: THREE.MeshStandardMaterial;
    ["Material_5.014"]: THREE.MeshStandardMaterial;
    ["Material_6.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Pixel-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_2002.geometry} material={materials["Material_2.017"]} />
      <mesh geometry={nodes.Mesh_3002.geometry} material={materials["Material_3.013"]} />
      <mesh geometry={nodes.Mesh_4002.geometry} material={materials["Material_4.018"]} />
      <mesh geometry={nodes.Mesh_5001.geometry} material={materials["Material_5.014"]} />
      <mesh geometry={nodes.Mesh_6001.geometry} material={materials["Material_6.003"]} />
    </group>
  );
}

useGLTF.preload("/Pixel-cut2-transformed.glb");
