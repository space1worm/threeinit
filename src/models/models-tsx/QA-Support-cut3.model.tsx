/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/QA-Support-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["S_Mesh_0-157"]: THREE.Mesh;
    ["S_Mesh_1-143"]: THREE.Mesh;
    ["S_Mesh_2-071"]: THREE.Mesh;
  };
  materials: {
    ["Material_Mesh_0-157"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-143"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-071"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/QA-Support-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["S_Mesh_0-157"].geometry}
        material={materials["Material_Mesh_0-157"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-143"].geometry}
        material={materials["Material_Mesh_1-143"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-071"].geometry}
        material={materials["Material_Mesh_2-071"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/QA-Support-cut3-transformed.glb");
