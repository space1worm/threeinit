/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Flex-Chain-Sec9.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    cable: THREE.Mesh;
    front_part: THREE.Mesh;
    frame: THREE.Mesh;
    chain: THREE.Mesh;
    floor: THREE.Mesh;
  };
  materials: {
    _000002AFFD169B00: THREE.MeshStandardMaterial;
    _000002AFFD16A190: THREE.MeshStandardMaterial;
    _000002AFFD16BA80: THREE.MeshStandardMaterial;
    _000002AFFD16CA40: THREE.MeshStandardMaterial;
    _000002AFFD16D4C0: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Flex-Chain-Sec9-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cable.geometry} material={materials._000002AFFD169B00} />
      <mesh geometry={nodes.front_part.geometry} material={materials._000002AFFD16A190} />
      <mesh geometry={nodes.frame.geometry} material={materials._000002AFFD16BA80} />
      <mesh geometry={nodes.chain.geometry} material={materials._000002AFFD16CA40} />
      <mesh geometry={nodes.floor.geometry} material={materials._000002AFFD16D4C0} />
    </group>
  );
}

useGLTF.preload("/Flex-Chain-Sec9-transformed.glb");