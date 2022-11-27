import { PresentationControls } from '@react-three/drei'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectActiveObjectModel } from 'selectors'
import { Ball, Box, Meteorite } from '../Models'

export const ActivePhysicalObject = () => {
  const activeModel = useSelector(selectActiveObjectModel)

  return (
    <mesh>
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
  const models: Record<PhysicalModels, JSX.Element> = {
    '@Ball': <Ball />,
    '@Box': <Box />,
    '@Meteorite': <Meteorite />,
  }

  return models[activeModel]
}
