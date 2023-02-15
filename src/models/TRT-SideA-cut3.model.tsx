/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/iraklikverenchkhiladze/Desktop/threeinit/src/models/TRT-SideA-cut3.glb --transform --t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0011: THREE.Mesh;
    Mesh_1011: THREE.Mesh;
  };
  materials: {
    ["Material_0.143"]: THREE.MeshStandardMaterial;
    ["Material_1.113"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function TrtSideA3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${modelsUrl}/trt-sidea-cut3.glb`) as GLTFResult;
  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0011.geometry} material={materials["Material_0.143"]} />
      <mesh geometry={nodes.Mesh_1011.geometry} material={materials["Material_1.113"]} />
    </group>
  );
}
