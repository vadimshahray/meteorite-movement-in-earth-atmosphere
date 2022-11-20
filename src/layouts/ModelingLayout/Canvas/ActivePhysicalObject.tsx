import { PresentationControls } from '@react-three/drei'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectActiveObjectModel,
  selectObjectModely0,
  selectPlanetRValue,
} from 'selectors'
import { Ball, Box } from '../Models'

export const ActivePhysicalObject = () => {
  const activeModel = useSelector(selectActiveObjectModel)

  const planetR = useSelector(selectPlanetRValue)
  const y0 = useSelector(selectObjectModely0)

  return (
    <mesh position={getObjectPosition(planetR, y0)}>
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
  }

  return models[activeModel]
}

//TODO: добавить в рассчет размеры модели объекта
const getObjectPosition = (planetR: number, y0: number) => {
  return [-(planetR / 2 + y0), 0, planetR / 2]
}
