import { Stars } from '@react-three/drei'
import { Canvas as TCanvas } from '@react-three/fiber'
import React from 'react'
import { ModelingScene } from './ModelingScene'

export const Canvas = () => {
  return (
    <TCanvas>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <ambientLight args={[0x404040, 10]} />

      <ModelingScene />
    </TCanvas>
  )
}
