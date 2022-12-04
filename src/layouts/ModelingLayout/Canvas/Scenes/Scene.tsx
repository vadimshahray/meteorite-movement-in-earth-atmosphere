import { useThree } from '@react-three/fiber'
import React from 'react'
import { Planet } from '../../Models'
import { ActivePhysicalObject } from '../ActivePhysicalObject'

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
