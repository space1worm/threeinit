/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/iraklikverenchkhiladze/Desktop/threeinit/src/models/SCT-SideC-cut3.glb --transform --t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0005: THREE.Mesh;
    Mesh_1005: THREE.Mesh;
    Mesh_2005: THREE.Mesh;
    Mesh_3005: THREE.Mesh;
    Mesh_4005: THREE.Mesh;
  };
  materials: {
    ["Material_0.084"]: THREE.MeshStandardMaterial;
    ["Material_1.057"]: THREE.MeshStandardMaterial;
    ["Material_2.029"]: THREE.MeshStandardMaterial;
    ["Material_3.023"]: THREE.MeshStandardMaterial;
    ["Material_4.026"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function SctSideC3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${modelsUrl}/sct-sidec-cut3.glb`) as GLTFResult;

  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0005.geometry} material={materials["Material_0.084"]} />
      <mesh geometry={nodes.Mesh_1005.geometry} material={materials["Material_1.057"]} />
      <mesh geometry={nodes.Mesh_2005.geometry} material={materials["Material_2.029"]} />
      <mesh geometry={nodes.Mesh_3005.geometry} material={materials["Material_3.023"]} />
      <mesh geometry={nodes.Mesh_4005.geometry} material={materials["Material_4.026"]} />
    </group>
  );
}
