/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/pixel-pp1-side-C-cut1.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001AD33069CC0_02_IndexedFaceSet: THREE.Mesh;
    _000001AD33070C50_11_IndexedFaceSet005: THREE.Mesh;
    _000001AD33070C50_11_IndexedFaceSet005_1: THREE.Mesh;
    _000001AD330740D0_IndexedFaceSet: THREE.Mesh;
    _000001AD33074F40_IndexedFaceSet: THREE.Mesh;
    _000001AD330776A0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000001AD33069CC0_02.005"]: THREE.MeshStandardMaterial;
    ["_000001AD33070C50_11.004"]: THREE.MeshStandardMaterial;
    ["_000001AD330740D0.005"]: THREE.MeshStandardMaterial;
    ["_000001AD33074F40.005"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pixel-pp1-side-C-cut1-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes._000001AD33069CC0_02_IndexedFaceSet.geometry}
        material={materials["_000001AD33069CC0_02.005"]}
      />
      <mesh geometry={nodes._000001AD330740D0_IndexedFaceSet.geometry} material={materials["_000001AD330740D0.005"]} />
      <mesh geometry={nodes._000001AD33074F40_IndexedFaceSet.geometry} material={materials["_000001AD33074F40.005"]} />
      <mesh geometry={nodes._000001AD330776A0_IndexedFaceSet.geometry} material={materials["_000001AD33074F40.005"]} />
      <mesh
        geometry={nodes._000001AD33070C50_11_IndexedFaceSet005.geometry}
        material={materials["_000001AD33070C50_11.004"]}
      />
      <mesh
        geometry={nodes._000001AD33070C50_11_IndexedFaceSet005_1.geometry}
        material={nodes._000001AD33070C50_11_IndexedFaceSet005_1.material}
      />
    </group>
  );
}

useGLTF.preload("/pixel-pp1-side-C-cut1-transformed.glb");
