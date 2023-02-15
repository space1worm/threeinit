/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Lar-FCAL-SideC-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0011: THREE.Mesh;
    S__000001BC3EFE25A0001: THREE.Mesh;
  };
  materials: {
    ["Material_0.034"]: THREE.MeshStandardMaterial;
    ["Material__000001BC3EFE25A0.006"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Lar-FCAL-SideC-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.S__000001BC3EFE25A0001.geometry}
        material={materials["Material__000001BC3EFE25A0.006"]}
        position={[-0.54, 0, -6.54]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh geometry={nodes.Mesh_0011.geometry} material={materials["Material_0.034"]} />
    </group>
  );
}

useGLTF.preload("/Lar-FCAL-SideC-cut4-transformed.glb");
