import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { ApplyDefaults } from "../utils/apply.util";

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
  const { nodes, materials } = useGLTF("/models/TRT-SideC-cut3-transformed.glb") as GLTFResult;
  ApplyDefaults(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0003.geometry} material={materials["Material_0.147"]} />
      <mesh geometry={nodes.Mesh_1003.geometry} material={materials["Material_1.117"]} />
    </group>
  );
}

useGLTF.preload("/models/TRT-SideC-cut3-transformed.glb");
