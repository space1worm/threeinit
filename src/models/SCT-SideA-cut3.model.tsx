/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/iraklikverenchkhiladze/Desktop/threeinit/src/models/SCT-SideA-cut3.glb --transform --t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0001: THREE.Mesh;
    Mesh_1001: THREE.Mesh;
    Mesh_2001: THREE.Mesh;
    Mesh_3001: THREE.Mesh;
    Mesh_4001: THREE.Mesh;
  };
  materials: {
    ["Material_0.080"]: THREE.MeshStandardMaterial;
    ["Material_1.053"]: THREE.MeshStandardMaterial;
    ["Material_2.025"]: THREE.MeshStandardMaterial;
    ["Material_3.019"]: THREE.MeshStandardMaterial;
    ["Material_4.022"]: THREE.MeshStandardMaterial;
  };
};
/**
 *
 * @param props
 */
export function SctSideA3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${import.meta.env.VITE_MODELS_PROVIDER}/sct-sidea-cut3.glb`) as GLTFResult;

  applyDefaultsToModel(materials);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0001.geometry} material={materials["Material_0.080"]} />
      <mesh geometry={nodes.Mesh_1001.geometry} material={materials["Material_1.053"]} />
      <mesh geometry={nodes.Mesh_2001.geometry} material={materials["Material_2.025"]} />
      <mesh geometry={nodes.Mesh_3001.geometry} material={materials["Material_3.019"]} />
      <mesh geometry={nodes.Mesh_4001.geometry} material={materials["Material_4.022"]} />
    </group>
  );
}
