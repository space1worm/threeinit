/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/TGC-SideA.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0007: THREE.Mesh;
    Mesh_1007: THREE.Mesh;
  };
  materials: {
    ["Material_0.121"]: THREE.MeshStandardMaterial;
    ["Material_1.085"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/TGC-SideA-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, Math.PI]}>
        <mesh geometry={nodes.Mesh_0007.geometry} material={materials["Material_0.121"]} />
        <mesh geometry={nodes.Mesh_1007.geometry} material={materials["Material_1.085"]} />
      </group>
    </group>
  );
}

useGLTF.preload("/TGC-SideA-transformed.glb");