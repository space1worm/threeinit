/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Tower-Turret-SideA-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1005: THREE.Mesh;
  };
  materials: {
    ["Material_1.102"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function TowerTurretSideACut3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(`${modelsUrl}/tower-turret-sidea-cut3.glb`) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_1005.geometry} material={materials["Material_1.102"]} />
    </group>
  );
}