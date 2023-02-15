/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/iraklikverenchkhiladze/Desktop/threeinit/src/models/Pixel-cut3.glb --transform --t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1003: THREE.Mesh;
    Mesh_2003: THREE.Mesh;
    Mesh_3003: THREE.Mesh;
    Mesh_4003: THREE.Mesh;
    Mesh_5002: THREE.Mesh;
  };
  materials: {
    ["Material_1.045"]: THREE.MeshStandardMaterial;
    ["Material_2.018"]: THREE.MeshStandardMaterial;
    ["Material_3.014"]: THREE.MeshStandardMaterial;
    ["Material_4.019"]: THREE.MeshStandardMaterial;
    ["Material_5.015"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function PixelCut3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${import.meta.env.VITE_MODELS_PROVIDER}/pixel-cut3.glb`) as GLTFResult;

  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_1003.geometry} material={materials["Material_1.045"]} />
      <mesh geometry={nodes.Mesh_2003.geometry} material={materials["Material_2.018"]} />
      <mesh geometry={nodes.Mesh_3003.geometry} material={materials["Material_3.014"]} />
      <mesh geometry={nodes.Mesh_4003.geometry} material={materials["Material_4.019"]} />
      <mesh geometry={nodes.Mesh_5002.geometry} material={materials["Material_5.015"]} />
    </group>
  );
}
