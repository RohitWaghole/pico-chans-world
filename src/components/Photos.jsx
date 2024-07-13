import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import React, { useMemo, useRef } from "react";
import * as Three from "three";
import { imagesList } from "./utilities/Store";

const Photos = () => {
  const [images] = useAtom(imagesList);
  const imagesRef = useRef(null);

  const urls = images.map((image) => image.url);

  const texturesArray = useTexture(urls);

  const textures = images.map((image, index) => ({
    texture: texturesArray[index],
    width: image.width,
    height: image.height,
  }));

  const positions = useMemo(() => {
    return images.map((_, i) => {
      return {
        pos: [
          (Math.random() - 0.5) * 100,
          Math.random() * 0.4 + 1.5,
          (Math.random() - 0.5) * 100,
        ],
        textureData: textures[i],
      };
    });
  }, [images, textures]);

  // Rotate the images group
  useFrame((_, delta) => {
    if (imagesRef.current) {
      imagesRef.current.rotation.y += delta * 0.01;
    }
  });

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
