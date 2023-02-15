/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Access-Platforms-Even-Sectors.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Handrail005: THREE.Mesh;
    Floor004: THREE.Mesh;
    construct004: THREE.Mesh;
  };
  materials: {
    _000002A19A116090: THREE.MeshStandardMaterial;
    _000002A19A1165D0: THREE.MeshStandardMaterial;
    _000002A19A116720: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Access-Platforms-Even-Sectors-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Handrail005.geometry} material={materials._000002A19A116090} />
      <mesh geometry={nodes.Floor004.geometry} material={materials._000002A19A1165D0} />
      <mesh geometry={nodes.construct004.geometry} material={materials._000002A19A116720} />
    </group>
  );
}

useGLTF.preload("/Access-Platforms-Even-Sectors-transformed.glb");