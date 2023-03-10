/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/End-Cap-Toroid-SideA-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    S__03F37E38: THREE.Mesh;
    S__03F42908: THREE.Mesh;
    S__04191DC8: THREE.Mesh;
    S__0419EAA8: THREE.Mesh;
    S__041BAE98: THREE.Mesh;
  };
  materials: {
    ["Material__03F37E38.002"]: THREE.MeshStandardMaterial;
    ["Material__03F42908.002"]: THREE.MeshStandardMaterial;
    ["Material__04191DC8.002"]: THREE.MeshStandardMaterial;
    ["Material__0419EAA8.002"]: THREE.MeshStandardMaterial;
    ["Material__041BAE98.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/End-Cap-Toroid-SideA-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.S__03F37E38.geometry}
        material={materials["Material__03F37E38.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__03F42908.geometry}
        material={materials["Material__03F42908.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__04191DC8.geometry}
        material={materials["Material__04191DC8.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__0419EAA8.geometry}
        material={materials["Material__0419EAA8.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.S__041BAE98.geometry}
        material={materials["Material__041BAE98.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/End-Cap-Toroid-SideA-cut2-transformed.glb");
