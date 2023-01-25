import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';

export default function Balloon({ ...props }) {
  const ref = useRef();
  const { nodes } = useGLTF('/scene.gltf');
  const materialProps = useControls({
    thickness: { value: 5, min: 0, max: 20 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.1 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
    ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
    envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
    color: '#2b0297',
    attenuationTint: '#2b0297',
    attenuationDistance: { value: 1, min: 0, max: 1 }
  });

  // Mouse behaviour
  const { viewport } = useThree()
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
            <mesh geometry={nodes.Object_4.geometry}> {/* material={materials.Metallic} */}
              <meshPhysicalMaterial {...materialProps} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
