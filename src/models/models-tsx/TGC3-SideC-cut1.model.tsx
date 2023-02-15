/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/TGC3-SideC-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0025: THREE.Mesh;
    Mesh_1025: THREE.Mesh;
  };
  materials: {
    ["Material_0.119"]: THREE.MeshStandardMaterial;
    ["Material_1.083"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/TGC3-SideC-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, Math.PI]}>
        <mesh geometry={nodes.Mesh_0025.geometry} material={materials["Material_0.119"]} />
        <mesh geometry={nodes.Mesh_1025.geometry} material={materials["Material_1.083"]} />
      </group>
    </group>
  );
}

useGLTF.preload("/TGC3-SideC-cut1-transformed.glb");
