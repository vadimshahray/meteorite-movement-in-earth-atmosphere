import { Sphere } from '@react-three/drei'
import React from 'react'

export const Ball = React.memo(
  () => {
    return (
      <>
        {/** @ts-ignore */}
        <Sphere />
      </>
    )
  },
  () => true,
)
