import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({refContainer}: any) {
  const ref = React.useRef();
  const { nodes, materials } = useGLTF("/shiba.glb");

  let {innerWidth, innerHeight} = window;
  return (
    <group {...refContainer} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              scale={2}
              castShadow
              receiveShadow
              geometry={nodes.Group18985_default_0.geometry}
              material={materials["default"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              scale={2}
              castShadow
              receiveShadow
              geometry={nodes.Box002_default_0.geometry}
              material={materials["default"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              scale={2}
              castShadow
              receiveShadow
              geometry={nodes.Object001_default_0.geometry}
              material={materials["default"]}
            />
          </group>
    </group>
  );
}

useGLTF.preload("/shiba.glb");
