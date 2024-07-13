import React from "react";
import City from "./City";
import Road from "./Road";
import { PositionalAudio, Sky, Sparkles } from "@react-three/drei";
import AddTrees from "./AddTrees";
import { Color } from "three";
import Photos from "./Photos";
import { Physics } from "@react-three/rapier";
import { CharacterController } from "./person/CharacterController";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[2, 2, 2]} intensity={2} />

      {/* <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}

      <Sparkles count={2000} size={50} scale={100} noise={0.5} />
      {/* /** Number of particles (default: 100) */}
      {/* count?: number */}
      {/* /** Speed of particles (default: 1) */}
      {/* speed?: number | Float32Array */}
      {/* /** Opacity of particles (default: 1) */}
      {/* opacity?: number | Float32Array */}
      {/* /** Color of particles (default: 100) */}
      {/* color?: THREE.ColorRepresentation | Float32Array */}
      {/* /** Size of particles (default: randomized between 0 and 1) */}
      {/* size?: number | Float32Array */}
      {/* /** The space the particles occupy (default: 1) */}
      {/* scale?: number | [number, number, number] | THREE.Vector3 */}
      {/* /** Movement factor (default: 1) */}
      {/* noise?: number | [number, number, number] | THREE.Vector3 | Float32Array */}
      {/* /> */}

      <Photos />
      <AddTrees />
      <PositionalAudio
        position={[0, 0, 0]}
        url="./sound.mp3"
        distance={5}
        autoplay
        loop
      />
      <City />
      <Physics>
        <CharacterController />
        <Road />
      </Physics>
    </>
  );
};

export default Experience;
