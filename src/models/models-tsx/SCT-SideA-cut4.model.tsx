/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/SCT-SideA-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0001: THREE.Mesh;
    Mesh_1001: THREE.Mesh;
    Mesh_2001: THREE.Mesh;
    Mesh_3001: THREE.Mesh;
    Mesh_4001: THREE.Mesh;
  };
  materials: {
    ["Material_0.080"]: THREE.MeshStandardMaterial;
    ["Material_1.053"]: THREE.MeshStandardMaterial;
    ["Material_2.025"]: THREE.MeshStandardMaterial;
    ["Material_3.019"]: THREE.MeshStandardMaterial;
    ["Material_4.022"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/SCT-SideA-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0001.geometry} material={materials["Material_0.080"]} />
      <mesh geometry={nodes.Mesh_1001.geometry} material={materials["Material_1.053"]} />
      <mesh geometry={nodes.Mesh_2001.geometry} material={materials["Material_2.025"]} />
      <mesh geometry={nodes.Mesh_3001.geometry} material={materials["Material_3.019"]} />
      <mesh geometry={nodes.Mesh_4001.geometry} material={materials["Material_4.022"]} />
    </group>
  );
}

useGLTF.preload("/SCT-SideA-cut4-transformed.glb");
