import { useThree } from '@react-three/fiber'
import React from 'react'
import { ActivePhysicalObject } from '../ActivePhysicalObject'

export const MeteoriteScene = () => {
  useThree(({ camera }) => {
    camera.position.set(0, 0, 30)
  })

  return (
    <>
      <ActivePhysicalObject />
    </>
  )
}
