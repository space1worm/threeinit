/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/QA-CALO-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["S_Mesh_0-095"]: THREE.Mesh;
    ["S_Mesh_0-096"]: THREE.Mesh;
    ["S_Mesh_1-084"]: THREE.Mesh;
  };
  materials: {
    ["Material_Mesh_0-095"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_0-096"]: THREE.MeshStandardMaterial;
    ["Material_Mesh_1-084"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/QA-CALO-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["S_Mesh_0-095"].geometry}
        material={materials["Material_Mesh_0-095"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_0-096"].geometry}
        material={materials["Material_Mesh_0-096"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["S_Mesh_1-084"].geometry}
        material={materials["Material_Mesh_1-084"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/QA-CALO-cut3-transformed.glb");
