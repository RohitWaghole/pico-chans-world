import { Clone, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useMemo } from "react";

const AddTrees = () => {
  const totalTrees = 10 * 3;
  const positions = useMemo(() => {
    const position = [];

    for (let i = 0; i < totalTrees; i++) {
      let tempArray = [];
      tempArray.push((Math.random() - 0.5) * 130);
      tempArray.push(-0.5);
      tempArray.push((Math.random() - 0.5) * 150);
      position.push(tempArray);
    }

    return position;
  }, []);

  const tree1 = useGLTF("./tree1.glb");
  const tree2 = useGLTF("./tree2.glb");

  return (
    <>
      {positions.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <group position={item} scale={2} key={index}>
              {/* <RigidBody type="fixed" colliders="hull"> */}
              <Clone object={tree1.scene} />
              {/* </RigidBody> */}
            </group>
          );
        } else {
          return (
            <group position={item} scale={2} key={index}>
              {/* <RigidBody type="fixed" colliders="hull"> */}
              <Clone object={tree2.scene} />
              {/* </RigidBody> */}
            </group>
          );
        }
      })}
    </>
  );
};

export default AddTrees;
