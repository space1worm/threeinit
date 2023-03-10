/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Muon-Barrel-Inner-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["S_Mesh_1-022"]: THREE.Mesh;
    ["S_Mesh_4-002"]: THREE.Mesh;
  };
  materials: {
    ["Material_Mesh_1-022.001"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_4-002.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Muon-Barrel-Inner-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["S_Mesh_1-022"].geometry}
        material={materials["Material_Mesh_1-022.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_4-002"].geometry}
        material={materials["Material_Mesh_4-002.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Muon-Barrel-Inner-cut4-transformed.glb");
