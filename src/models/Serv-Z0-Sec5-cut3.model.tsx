/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec5-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    _00000128280CD5B0_IndexedFaceSet: THREE.Mesh;
    _000001282E417450_IndexedFaceSet: THREE.Mesh;
    _000001282E420210_IndexedFaceSet: THREE.Mesh;
    _000001282F50CC50_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_00000128280CD5B0.001"]: THREE.MeshStandardMaterial;
    ["_000001282E417450.001"]: THREE.MeshStandardMaterial;
    ["_000001282E420210.001"]: THREE.MeshStandardMaterial;
    ["_000001282F50CC50.001"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function ServZ0Sec5Cut3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(`${modelsUrl}/serv-z0-sec5-cut3.glb`) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._00000128280CD5B0_IndexedFaceSet.geometry} material={materials["_00000128280CD5B0.001"]} />
      <mesh geometry={nodes._000001282E417450_IndexedFaceSet.geometry} material={materials["_000001282E417450.001"]} />
      <mesh geometry={nodes._000001282E420210_IndexedFaceSet.geometry} material={materials["_000001282E420210.001"]} />
      <mesh geometry={nodes._000001282F50CC50_IndexedFaceSet.geometry} material={materials["_000001282F50CC50.001"]} />
    </group>
  );
}