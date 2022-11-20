import { PresentationControls } from '@react-three/drei'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectActiveObjectModel } from 'selectors'
import { Ball, Box } from '../Models'

export const ActivePhysicalObject = () => {
  const activeModel = useSelector(selectActiveObjectModel)

  return (
    <mesh position={[-20, 0, 0]}>
      <PresentationControls
        snap
        speed={2}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        {getActiveObjectModel(activeModel)}
      </PresentationControls>
    </mesh>
  )
}

const getActiveObjectModel = (activeModel: PhysicalModels) => {
  switch (activeModel) {
    case '@Ball':
      return <Ball />
    default:
      return <Box />
  }
}
