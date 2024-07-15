import React from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import Experience from "./Experience";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

const PicoWorld = () => {
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas
          camera={{
            fov: 75,
            position: [
              -0.17466956505915185, 0.5776165773112285, 10.153816173706678,
            ],
            near: 0.001,
            far: 500,
          }}
        >
          {/* <OrbitControls /> */}
          <color attach="background" args={["#222222"]} />
          <Experience />
          <Leva hidden />
        </Canvas>
      </KeyboardControls>
    </>
  );
};

export default PicoWorld;
