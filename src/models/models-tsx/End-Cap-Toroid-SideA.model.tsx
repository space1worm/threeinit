/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/End-Cap-Toroid-SideA.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    S__046AD8E8: THREE.Mesh;
    S__0536A8B8: THREE.Mesh;
    S__05CE1148: THREE.Mesh;
    S__1F089968: THREE.Mesh;
    S__1F0C5598: THREE.Mesh;
  };
  materials: {
    ["Material__046AD8E8.001"]: THREE.MeshStandardMaterial;
    ["Material__0536A8B8.001"]: THREE.MeshStandardMaterial;
    ["Material__05CE1148.001"]: THREE.MeshStandardMaterial;
    ["Material__1F089968.001"]: THREE.MeshStandardMaterial;
    ["Material__1F0C5598.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/End-Cap-Toroid-SideA-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.S__046AD8E8.geometry}
        material={materials["Material__046AD8E8.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__0536A8B8.geometry}
        material={materials["Material__0536A8B8.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__05CE1148.geometry}
        material={materials["Material__05CE1148.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__1F089968.geometry}
        material={materials["Material__1F089968.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__1F0C5598.geometry}
        material={materials["Material__1F0C5598.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/End-Cap-Toroid-SideA-transformed.glb");
