import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as Three from "three";
import { imagesList } from "./utilities/Store";

const Photos = () => {
  const [images, setImages] = useAtom(imagesList);

  const imagesRef = useRef(null);

  const textures = [];
  images.map((item) => {
    let texture = useTexture(item.url);
    texture.flipY = true;
    textures.push({ texture, width: item.width, height: item.height });
  });

  const positions = useMemo(() => {
    const position = [];

    for (let i = 0; i < images.length; i++) {
      let tempArray = [];
      tempArray.push((Math.random() - 0.5) * 100);
      tempArray.push(Math.random() * 0.4 + 1.5);
      tempArray.push((Math.random() - 0.5) * 100);
      position.push({ pos: tempArray, textureData: textures[i] });
    }

    return position;
  }, []);

  useFrame((info, delta) => {
    if (imagesRef.current) {
      imagesRef.current.rotation.y += delta * 0.01;
    }
  });

  // texture.flipY = false;
  return (
    <group ref={imagesRef}>
      {positions.map((item, index) => (
        <Float
          key={index}
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          // floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <group position={item.pos} scale={1}>
            <mesh>
              <boxGeometry
                args={[
                  item.textureData.width / 200,
                  item.textureData.height / 200,
                  0.05,
                ]}
              />
              <meshBasicMaterial
                map={item.textureData.texture}
                side={Three.DoubleSide}
              />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
};

export default Photos;
