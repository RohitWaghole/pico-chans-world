import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export default function City(props) {
  const { nodes, materials } = useGLTF("./city.glb");
  const texture = useTexture("./city.jpg");
  texture.flipY = false;

  useFrame((state, delta) => {
    // console.log(state);
  });

  return (
    // <RigidBody type="fixed" colliders="trimesh">
    <group {...props} dispose={null} scale={25} position-y={-1.51}>
      {/* <mesh geometry={nodes.Cube.geometry}>
          <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh> */}
      <mesh geometry={nodes.Cube057.geometry}>
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <mesh geometry={nodes.Cube001.geometry} position={[3.281, -0.2, -9.448]}>
        <meshStandardMaterial map={texture} color={"blue"} />
      </mesh>
      <mesh geometry={nodes.Cube002.geometry} position={[3.281, -0.2, -8.028]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube003.geometry} position={[3.281, -0.2, -6.608]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube004.geometry} position={[3.281, -0.2, -5.188]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube005.geometry} position={[3.281, -0.2, -3.768]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube006.geometry} position={[3.281, -0.2, -2.348]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube007.geometry} position={[3.281, -0.2, -0.928]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube008.geometry} position={[3.281, -0.2, 0.492]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube009.geometry} position={[3.281, -0.2, 1.912]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube010.geometry} position={[3.281, -0.2, 3.332]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube011.geometry} position={[3.281, -0.2, 4.752]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube012.geometry} position={[3.281, -0.2, 6.172]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube013.geometry} position={[3.281, -0.2, 7.592]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube014.geometry} position={[3.281, -0.2, 9.012]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube015.geometry} position={[3.011, -0.2, -8.928]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube016.geometry} position={[3.011, -0.2, -7.508]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube017.geometry} position={[3.011, -0.2, -6.088]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube018.geometry} position={[3.011, -0.2, -4.668]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube019.geometry} position={[3.011, -0.2, -3.248]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube020.geometry} position={[3.011, -0.2, -1.828]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube021.geometry} position={[3.011, -0.2, -0.408]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube022.geometry} position={[3.011, -0.2, 1.012]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube023.geometry} position={[3.011, -0.2, 2.432]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube024.geometry} position={[3.011, -0.2, 3.852]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube025.geometry} position={[3.011, -0.2, 5.272]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube026.geometry} position={[3.011, -0.2, 6.692]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube027.geometry} position={[3.011, -0.2, 8.112]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube028.geometry} position={[3.011, -0.2, 9.532]}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube029.geometry}
        position={[-3.87, -0.2, 9.532]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube030.geometry}
        position={[-3.87, -0.2, 8.112]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube031.geometry}
        position={[-3.87, -0.2, 6.692]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube032.geometry}
        position={[-3.87, -0.2, 5.272]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube033.geometry}
        position={[-3.87, -0.2, 3.852]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube034.geometry}
        position={[-3.87, -0.2, 2.432]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube035.geometry}
        position={[-3.87, -0.2, 1.012]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube036.geometry}
        position={[-3.87, -0.2, -0.408]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube037.geometry}
        position={[-3.87, -0.2, -1.828]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube038.geometry}
        position={[-3.87, -0.2, -3.248]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube039.geometry}
        position={[-3.87, -0.2, -4.668]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube040.geometry}
        position={[-3.87, -0.2, -6.088]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube041.geometry}
        position={[-3.87, -0.2, -7.508]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube042.geometry}
        position={[-3.87, -0.2, -8.928]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube043.geometry}
        position={[-3.6, -0.2, 9.012]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube044.geometry}
        position={[-3.6, -0.2, 7.592]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube045.geometry}
        position={[-3.6, -0.2, 6.172]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube046.geometry}
        position={[-3.6, -0.2, 4.752]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube047.geometry}
        position={[-3.6, -0.2, 3.332]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube048.geometry}
        position={[-3.6, -0.2, 1.912]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube049.geometry}
        position={[-3.6, -0.2, 0.492]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube050.geometry}
        position={[-3.6, -0.2, -0.928]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube051.geometry}
        position={[-3.6, -0.2, -2.348]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube052.geometry}
        position={[-3.6, -0.2, -3.768]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube053.geometry}
        position={[-3.6, -0.2, -5.188]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube054.geometry}
        position={[-3.6, -0.2, -6.608]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube055.geometry}
        position={[-3.6, -0.2, -8.028]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Cube056.geometry}
        position={[-3.6, -0.2, -9.448]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      {/* <mesh geometry={nodes.Plane001.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane002.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane003.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane004.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane005.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane006.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane007.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane008.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane009.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane010.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Plane011.geometry}>
          <meshStandardMaterial map={texture} />
        </mesh> */}
    </group>
    // </RigidBody>
  );
}

useGLTF.preload("/city.glb");
