import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

export const Scene = () => {
  return (
    <Canvas>
      <ambientLight />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color='red' />
      </mesh>
    </Canvas>
  )
}
