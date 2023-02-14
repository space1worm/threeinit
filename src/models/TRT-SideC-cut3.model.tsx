import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0003: THREE.Mesh;
    Mesh_1003: THREE.Mesh;
  };
  materials: {
    ["Material_0.147"]: THREE.MeshStandardMaterial;
    ["Material_1.117"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function TrtSideC3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${import.meta.env.VITE_MODELS_PROVIDER}/TRT-SideC-cut3.glb`) as GLTFResult;
  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0003.geometry} material={materials["Material_0.147"]} />
      <mesh geometry={nodes.Mesh_1003.geometry} material={materials["Material_1.117"]} />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.VITE_MODELS_PROVIDER}/TRT-SideC-cut3.glb`);
