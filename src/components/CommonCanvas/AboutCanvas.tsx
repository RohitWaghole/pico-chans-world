import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";

const AboutCanvas = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 0.001,
          far: 500,
        }}
      >
        <color attach="background" args={["#111111"]} />

        <Experience />
      </Canvas>
    </>
  );
};

export default AboutCanvas;
