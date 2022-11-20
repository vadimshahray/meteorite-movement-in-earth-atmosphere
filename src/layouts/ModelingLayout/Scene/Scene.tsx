import { PresentationControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Box } from '../Models'

export const Scene = () => {
  return (
    <Canvas>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <PresentationControls
        snap
        speed={2}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <Box />
      </PresentationControls>
    </Canvas>
  )
}
