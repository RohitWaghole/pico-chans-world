import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Road(props) {
  const { nodes, materials } = useGLTF("./road.glb");
  return (
    <group {...props} dispose={null} position-y={-0.51}>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059_1.geometry}
          material={materials["Material.002"]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("./road.glb");
