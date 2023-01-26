import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Balloon({ ...props }) {
  const ref = useRef();
  const { nodes } = useGLTF('/scene.gltf');


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
              <meshPhysicalMaterial 
                thickness={ [5, 0, 20 ]}
                roughness={ [0, 0, 1, 0.1 ]}
                clearcoat={ [0, 0, 1, 0.1 ]}
                clearcoatRoughness={ [0, 0, 1, 0.1] }
                transmission={ [1, 0.9, 1, 0.01] }
                ior={ [1.25, 1, 2.3, 0.05 ]}
                envMapIntensity={ [25, 0, 100, 1] }
                color='#2b0297'
                attenuationTint='#2b0297'
                attenuationDistance={ [1, 0, 1] }
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
