import React from 'react'
import {
  MassField,
  RadiusField,
  DistanceField,
  AngelField,
  InitialVelocityField,
} from './Fields'

export const MeteoriteSection = () => {
  return (
    <div>
      <MassField />
      <DistanceField />
      <RadiusField />
      <AngelField />
      <InitialVelocityField />
    </div>
  )
}
