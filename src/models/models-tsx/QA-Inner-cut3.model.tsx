/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/QA-Inner-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["S_Mesh_0-115"]: THREE.Mesh;
    ["S_Mesh_0-117"]: THREE.Mesh;
    ["S_Mesh_1-102"]: THREE.Mesh;
    ["S_Mesh_1-103"]: THREE.Mesh;
    ["S_Mesh_1-104"]: THREE.Mesh;
    ["S_Mesh_1-105"]: THREE.Mesh;
    ["S_Mesh_2-056"]: THREE.Mesh;
    ["S_Mesh_2-057"]: THREE.Mesh;
    ["S_Mesh_2-058"]: THREE.Mesh;
    ["S_Mesh_2-060"]: THREE.Mesh;
    ["S_Mesh_3-032"]: THREE.Mesh;
    ["S_Mesh_3-033"]: THREE.Mesh;
    ["S_Mesh_4-025"]: THREE.Mesh;
    ["S_Mesh_5-013"]: THREE.Mesh;
  };
  materials: {
    ["Material_Mesh_0-115"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_0-117"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-102"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-103"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-104"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-105"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-056"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-057"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-058"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_2-060"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_3-032"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_3-033"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_4-025"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_5-013"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/QA-Inner-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["S_Mesh_0-115"].geometry}
        material={materials["Material_Mesh_0-115"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_0-117"].geometry}
        material={materials["Material_Mesh_0-117"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-102"].geometry}
        material={materials["Material_Mesh_1-102"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-103"].geometry}
        material={materials["Material_Mesh_1-103"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-104"].geometry}
        material={materials["Material_Mesh_1-104"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-105"].geometry}
        material={materials["Material_Mesh_1-105"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-056"].geometry}
        material={materials["Material_Mesh_2-056"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-057"].geometry}
        material={materials["Material_Mesh_2-057"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-058"].geometry}
        material={materials["Material_Mesh_2-058"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_2-060"].geometry}
        material={materials["Material_Mesh_2-060"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_3-032"].geometry}
        material={materials["Material_Mesh_3-032"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_3-033"].geometry}
        material={materials["Material_Mesh_3-033"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_4-025"].geometry}
        material={materials["Material_Mesh_4-025"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_5-013"].geometry}
        material={materials["Material_Mesh_5-013"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/QA-Inner-cut3-transformed.glb");