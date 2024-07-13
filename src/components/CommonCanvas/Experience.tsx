import { Cloud, Clouds, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Experience = () => {
  const starsRef: any = useRef();
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta * 0.01;
      starsRef.current.rotation.y += delta * 0.01;
      starsRef.current.rotation.z += delta * 0.01;
    }
  });
  return (
    <>
      <Stars
        ref={starsRef}
        radius={90}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.1}
      />
      <Sparkles scale={8} count={500} />

      <Clouds material={THREE.MeshBasicMaterial}>
        {/* <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" /> */}
        <Cloud seed={2} scale={2} volume={4} color="#EBDCF2" fade={100} />
        {/* <Cloud seed={2} scale={2} volume={4} color="#E0EDFC" fade={100} /> */}
      </Clouds>
    </>
  );
};

export default Experience;
