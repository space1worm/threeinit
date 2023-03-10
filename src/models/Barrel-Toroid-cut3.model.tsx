/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Barrel-Toroid-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1014: THREE.Mesh;
    Mesh_2012: THREE.Mesh;
    Mesh_3006: THREE.Mesh;
    Mesh_4003: THREE.Mesh;
    Mesh_5003: THREE.Mesh;
  };
  materials: {
    ["Material_1.014"]: THREE.MeshStandardMaterial;
    ["Material_2.012"]: THREE.MeshStandardMaterial;
    ["Material_3.006"]: THREE.MeshStandardMaterial;
    ["Material_4.003"]: THREE.MeshStandardMaterial;
    ["Material_5.003"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function BarrelToroidCut3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(`${modelsUrl}/barrel-toroid-cut3.glb`) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_1014.geometry} material={materials["Material_1.014"]} />
      <mesh geometry={nodes.Mesh_2012.geometry} material={materials["Material_2.012"]} />
      <mesh geometry={nodes.Mesh_3006.geometry} material={materials["Material_3.006"]} />
      <mesh geometry={nodes.Mesh_4003.geometry} material={materials["Material_4.003"]} />
      <mesh geometry={nodes.Mesh_5003.geometry} material={materials["Material_5.003"]} />
    </group>
  );
}
