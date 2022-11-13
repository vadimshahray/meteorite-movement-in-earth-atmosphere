import { Canvas } from '@react-three/fiber'
import React from 'react'

export const Scene = () => {
  return (
    <Canvas>
      <ambientLight />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color='red' />
      </mesh>
    </Canvas>
  )
}
