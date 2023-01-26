import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Balloon({ ...props }) {
  const ref = useRef();
  const { nodes } = useGLTF('/scene.gltf');
  const texture = useTexture('/texture.png');

  // Mouse behaviour
  useFrame(({clock}) => {
    const et = clock.getElapsedTime();
    let mult = 0.1;
    
    ref.current.position.set(Math.cos( et ) * mult, Math.cos( et ) * mult, Math.cos( et ) * mult);
    ref.current.rotation.set(-Math.cos( et ) * mult, -Math.cos( et ) * mult, -Math.cos( et ) * mult);
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0,0,0]} rotation={[-Math.PI / 2, 0.3, 10]} scale={[0.1, 0.1, 0.1]}>
            <mesh geometry={nodes.Object_4.geometry}>
              <meshPhysicalMaterial 
                map={texture}
                clearcoat={0.4}
                clearcoatRoughness={0}
                roughness={0.1}
                metalness={0.5}
                opacity={0.1}
                transmission={0.8}
                // transparent
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
