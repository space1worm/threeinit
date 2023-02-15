/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-USA-Serv-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001DE7E05D5E0_086_IndexedFaceSet: THREE.Mesh;
    _000001DE7E05D5E0_086_IndexedFaceSet_1: THREE.Mesh;
    Handrail001: THREE.Mesh;
    Platform001: THREE.Mesh;
    Pipe: THREE.Mesh;
    Cable: THREE.Mesh;
    El_Box001: THREE.Mesh;
    Door: THREE.Mesh;
    Fire: THREE.Mesh;
    Racks: THREE.Mesh;
    Back: THREE.Mesh;
    Vent: THREE.Mesh;
    Pump001: THREE.Mesh;
  };
  materials: {
    _000001DE7E05D5E0_086: THREE.MeshStandardMaterial;
    _000001DE7E06F400_00472: THREE.MeshStandardMaterial;
    _000001DE7E08ABB0: THREE.MeshStandardMaterial;
    _000001DE7E0570D0: THREE.MeshStandardMaterial;
    _000001DE7E0864D0: THREE.MeshStandardMaterial;
    _000001DE7F7BE300: THREE.MeshStandardMaterial;
    _000001DE7F7C6E20: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-USA-Serv-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Handrail001.geometry} material={materials._000001DE7E06F400_00472} />
      <mesh geometry={nodes.Platform001.geometry} material={materials._000001DE7E08ABB0} />
      <mesh geometry={nodes.Pipe.geometry} material={materials._000001DE7E0570D0} />
      <mesh geometry={nodes.Cable.geometry} material={materials._000001DE7E0864D0} />
      <mesh geometry={nodes.El_Box001.geometry} material={materials._000001DE7E06F400_00472} />
      <mesh geometry={nodes.Door.geometry} material={materials._000001DE7F7BE300} />
      <mesh geometry={nodes.Fire.geometry} material={materials._000001DE7E0570D0} />
      <mesh geometry={nodes.Racks.geometry} material={materials._000001DE7E06F400_00472} />
      <mesh geometry={nodes.Back.geometry} material={materials._000001DE7F7C6E20} />
      <mesh geometry={nodes.Vent.geometry} material={materials._000001DE7F7BE300} />
      <mesh geometry={nodes.Pump001.geometry} material={materials._000001DE7E0570D0} />
      <mesh geometry={nodes._000001DE7E05D5E0_086_IndexedFaceSet.geometry} material={materials._000001DE7E05D5E0_086} />
      <mesh
        geometry={nodes._000001DE7E05D5E0_086_IndexedFaceSet_1.geometry}
        material={nodes._000001DE7E05D5E0_086_IndexedFaceSet_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-USA-Serv-cut4-transformed.glb");