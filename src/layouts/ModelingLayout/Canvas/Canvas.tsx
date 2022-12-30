import { Stars } from '@react-three/drei'
import { Canvas as TCanvas } from '@react-three/fiber'
import {
  useMeteoriteInteractiveControl,
  useMeteoriteVelocityVectorControl,
} from 'hooks'
import React, { WheelEvent } from 'react'
import { ModelingScene } from './ModelingScene'

export const Canvas = () => {
  const { onWheel: onDistanceWheel } = useMeteoriteInteractiveControl(
    'distance',
    true,
  )
  const { onWheel: onRadiusWheel } = useMeteoriteInteractiveControl(
    'radius',
    false,
  )

  const velocityVectorControl = useMeteoriteVelocityVectorControl()

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    onDistanceWheel(e)
    onRadiusWheel(e)
  }

  return (
    <TCanvas onWheel={onWheel} {...velocityVectorControl}>
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
