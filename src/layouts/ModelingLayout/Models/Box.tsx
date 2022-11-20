import { RoundedBox } from '@react-three/drei'
import React from 'react'

export const Box = React.memo(
  () => {
    return (
      <>
        {/** @ts-ignore */}
        <RoundedBox scale={1} />
      </>
    )
  },
  () => true,
)
