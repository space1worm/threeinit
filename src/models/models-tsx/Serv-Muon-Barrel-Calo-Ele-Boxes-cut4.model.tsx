/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Muon-Barrel-Calo-Ele-Boxes-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Electrical_Boxes_Barrel_cut4: THREE.Mesh;
  };
  materials: {
    ["Material_L__0000022DB0271410.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Muon-Barrel-Calo-Ele-Boxes-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Electrical_Boxes_Barrel_cut4.geometry}
        material={materials["Material_L__0000022DB0271410.001"]}
      />
    </group>
  );
}

useGLTF.preload("/Serv-Muon-Barrel-Calo-Ele-Boxes-cut4-transformed.glb");
