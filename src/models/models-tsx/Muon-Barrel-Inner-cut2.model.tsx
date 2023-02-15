/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Muon-Barrel-Inner-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1003: THREE.Mesh;
    Mesh_2003: THREE.Mesh;
    Mesh_4003: THREE.Mesh;
    Mesh_5003: THREE.Mesh;
  };
  materials: {
    ["Material_1.023"]: THREE.MeshStandardMaterial;
    ["Material_4.012"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Muon-Barrel-Inner-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_1003.geometry} material={materials["Material_1.023"]} />
      <mesh geometry={nodes.Mesh_2003.geometry} material={materials["Material_1.023"]} />
      <mesh geometry={nodes.Mesh_4003.geometry} material={materials["Material_4.012"]} />
      <mesh geometry={nodes.Mesh_5003.geometry} material={materials["Material_4.012"]} />
    </group>
  );
}

useGLTF.preload("/Muon-Barrel-Inner-cut2-transformed.glb");
