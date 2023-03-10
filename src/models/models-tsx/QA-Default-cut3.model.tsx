/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/QA-Default-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["S_Mesh_0-103"]: THREE.Mesh;
    ["S_Mesh_0-105"]: THREE.Mesh;
    ["S_Mesh_0-107"]: THREE.Mesh;
    ["S_Mesh_1-087"]: THREE.Mesh;
    ["S_Mesh_1-088"]: THREE.Mesh;
    ["S_Mesh_1-089"]: THREE.Mesh;
    ["S_Mesh_1-092"]: THREE.Mesh;
    ["S_Mesh_2-047"]: THREE.Mesh;
    ["S_Mesh_2-048"]: THREE.Mesh;
    ["S_Mesh_2-050"]: THREE.Mesh;
    ["S_Mesh_3-026"]: THREE.Mesh;
  };
  materials: {
    ["Material_Mesh_0-103"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_0-105"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_0-107"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-087"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-088"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-089"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-092"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-047"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-048"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-050"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_3-026"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/QA-Default-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["S_Mesh_0-103"].geometry}
        material={materials["Material_Mesh_0-103"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_0-105"].geometry}
        material={materials["Material_Mesh_0-105"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_0-107"].geometry}
        material={materials["Material_Mesh_0-107"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-087"].geometry}
        material={materials["Material_Mesh_1-087"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-088"].geometry}
        material={materials["Material_Mesh_1-088"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-089"].geometry}
        material={materials["Material_Mesh_1-089"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-092"].geometry}
        material={materials["Material_Mesh_1-092"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-047"].geometry}
        material={materials["Material_Mesh_2-047"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-048"].geometry}
        material={materials["Material_Mesh_2-048"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-050"].geometry}
        material={materials["Material_Mesh_2-050"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_3-026"].geometry}
        material={materials["Material_Mesh_3-026"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/QA-Default-cut3-transformed.glb");
