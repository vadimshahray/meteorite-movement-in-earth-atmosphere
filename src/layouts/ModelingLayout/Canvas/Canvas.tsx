import { WheelEvent } from 'react'
import { Stars } from '@react-three/drei'
import { ModelingScene } from './ModelingScene'
import { Canvas as TCanvas } from '@react-three/fiber'
import {
  useMeteoriteDistanceControl,
  useMeteoriteRadiusControl,
  useMeteoriteVelocityVectorControl,
} from 'hooks'

export const Canvas = () => {
  const { onWheel: onRadiusWheel } = useMeteoriteRadiusControl()
  const { onWheel: onDistanceWheel } = useMeteoriteDistanceControl()

  const velocityVectorControl = useMeteoriteVelocityVectorControl()

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    onRadiusWheel?.(e)
    onDistanceWheel?.(e)
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
