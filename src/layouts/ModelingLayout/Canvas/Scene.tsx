import { useThree } from '@react-three/fiber'
import React from 'react'
import { Box, Planet } from '../Models'

export const Scene = () => {
  useThree(({ camera }) => {
    camera.position.set(0, 0, 30)
  })

  return (
    <>
      <Box />

      <Planet />
    </>
  )
}
