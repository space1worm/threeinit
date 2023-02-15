/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-USA-Serv-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001DE0A9DD670_IndexedFaceSet001: THREE.Mesh;
    _000001DE0A9DD670_IndexedFaceSet001_1: THREE.Mesh;
    Door: THREE.Mesh;
    Racks: THREE.Mesh;
    Fire: THREE.Mesh;
    Platform001: THREE.Mesh;
    Cable: THREE.Mesh;
    Handrail001: THREE.Mesh;
    Vent: THREE.Mesh;
    Pipe002: THREE.Mesh;
    Back: THREE.Mesh;
  };
  materials: {
    ["_000001DE0A9DD670.001"]: THREE.MeshStandardMaterial;
    ["_000001DE7B160B30.001"]: THREE.MeshStandardMaterial;
    ["_000001DE7B166080.001"]: THREE.MeshStandardMaterial;
    ["_000001DE45A5A5C0.001"]: THREE.MeshStandardMaterial;
    ["_000001DE74E6B440.001"]: THREE.MeshStandardMaterial;
    ["_000001DE74E6F1F0.001"]: THREE.MeshStandardMaterial;
    ["_000001DE74E67930_0006.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-USA-Serv-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Door.geometry} material={materials["_000001DE7B160B30.001"]} />
      <mesh geometry={nodes.Racks.geometry} material={materials["_000001DE7B166080.001"]} />
      <mesh geometry={nodes.Fire.geometry} material={materials["_000001DE45A5A5C0.001"]} />
      <mesh geometry={nodes.Platform001.geometry} material={materials["_000001DE74E6B440.001"]} />
      <mesh geometry={nodes.Cable.geometry} material={materials["_000001DE74E6F1F0.001"]} />
      <mesh geometry={nodes.Handrail001.geometry} material={materials["_000001DE7B166080.001"]} />
      <mesh geometry={nodes.Vent.geometry} material={materials["_000001DE7B160B30.001"]} />
      <mesh geometry={nodes.Pipe002.geometry} material={materials["_000001DE45A5A5C0.001"]} />
      <mesh geometry={nodes.Back.geometry} material={materials["_000001DE74E67930_0006.001"]} />
      <mesh
        geometry={nodes._000001DE0A9DD670_IndexedFaceSet001.geometry}
        material={materials["_000001DE0A9DD670.001"]}
      />
      <mesh
        geometry={nodes._000001DE0A9DD670_IndexedFaceSet001_1.geometry}
        material={nodes._000001DE0A9DD670_IndexedFaceSet001_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-USA-Serv-cut1-transformed.glb");