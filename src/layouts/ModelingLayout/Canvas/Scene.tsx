import { useThree } from '@react-three/fiber'
import React from 'react'
import { ActivePhysicalObject } from './ActivePhysicalObject'
import { Planet } from '../Models'

export const Scene = () => {
  useThree(({ camera }) => {
    camera.position.set(0, 0, 30)
  })

  return (
    <>
      <ActivePhysicalObject />

      <Planet />
    </>
  )
}
