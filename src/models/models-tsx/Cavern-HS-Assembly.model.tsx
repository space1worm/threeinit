/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Cavern-HS-Assembly.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["S_E17012190-001"]: THREE.Mesh;
  };
  materials: {
    ["Material_E17012190-001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Cavern-HS-Assembly-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["S_E17012190-001"].geometry}
        material={materials["Material_E17012190-001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Cavern-HS-Assembly-transformed.glb");