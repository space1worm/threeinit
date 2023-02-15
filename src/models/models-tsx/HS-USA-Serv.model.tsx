/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-USA-Serv.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Vent001: THREE.Mesh;
    RACKS: THREE.Mesh;
    Back001: THREE.Mesh;
    El_Box: THREE.Mesh;
    Pump: THREE.Mesh;
    Fire001: THREE.Mesh;
    _000001C5163555F0_IndexedFaceSet001: THREE.Mesh;
    _000001C5163555F0_IndexedFaceSet001_1: THREE.Mesh;
    Door001: THREE.Mesh;
    Cable001: THREE.Mesh;
    Pipe001: THREE.Mesh;
    Handrail: THREE.Mesh;
    Platform: THREE.Mesh;
  };
  materials: {
    ["_000001C5F5A49B10.001"]: THREE.MeshStandardMaterial;
    ["_000001C51635A9F0.001"]: THREE.MeshStandardMaterial;
    ["_000001C51635B860_041.001"]: THREE.MeshStandardMaterial;
    ["_000001C663475AB0.001"]: THREE.MeshStandardMaterial;
    ["_000001C5163555F0.001"]: THREE.MeshStandardMaterial;
    ["_000001C516350730.001"]: THREE.MeshStandardMaterial;
    ["_000001C516357180.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-USA-Serv-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Vent001.geometry} material={materials["_000001C5F5A49B10.001"]} />
      <mesh geometry={nodes.RACKS.geometry} material={materials["_000001C51635A9F0.001"]} />
      <mesh geometry={nodes.Back001.geometry} material={materials["_000001C51635B860_041.001"]} />
      <mesh geometry={nodes.El_Box.geometry} material={materials["_000001C51635A9F0.001"]} />
      <mesh geometry={nodes.Pump.geometry} material={materials["_000001C663475AB0.001"]} />
      <mesh geometry={nodes.Fire001.geometry} material={materials["_000001C663475AB0.001"]} />
      <mesh geometry={nodes.Door001.geometry} material={materials["_000001C5F5A49B10.001"]} />
      <mesh geometry={nodes.Cable001.geometry} material={materials["_000001C516350730.001"]} />
      <mesh geometry={nodes.Pipe001.geometry} material={materials["_000001C663475AB0.001"]} />
      <mesh geometry={nodes.Handrail.geometry} material={materials["_000001C51635A9F0.001"]} />
      <mesh geometry={nodes.Platform.geometry} material={materials["_000001C516357180.001"]} />
      <mesh
        geometry={nodes._000001C5163555F0_IndexedFaceSet001.geometry}
        material={materials["_000001C5163555F0.001"]}
      />
      <mesh
        geometry={nodes._000001C5163555F0_IndexedFaceSet001_1.geometry}
        material={nodes._000001C5163555F0_IndexedFaceSet001_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-USA-Serv-transformed.glb");
