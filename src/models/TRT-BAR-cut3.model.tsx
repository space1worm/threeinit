/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/iraklikverenchkhiladze/Desktop/threeinit/src/models/TRT-BAR-cut3.glb --transform --t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1008: THREE.Mesh;
    Mesh_2002: THREE.Mesh;
  };
  materials: {
    ["Material_1.110"]: THREE.MeshStandardMaterial;
    ["Material_2.049"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function TrtBar3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${modelsUrl}/trt-bar-cut3.glb`) as GLTFResult;

  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_1008.geometry} material={materials["Material_1.110"]} />
      <mesh geometry={nodes.Mesh_2002.geometry} material={materials["Material_2.049"]} />
    </group>
  );
}
