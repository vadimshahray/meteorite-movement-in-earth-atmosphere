import DataObjectIcon from '@mui/icons-material/DataObject'
import { Section } from 'components'
import React from 'react'
import {
  MassField,
  RadiusField,
  DistanceField,
  AngelField,
  InitialVelocityField,
} from './Fields'

export const MeteoriteSettings = () => {
  return (
    <Section title='Данные метеорита' Icon={DataObjectIcon}>
      <MassField />
      <DistanceField />
      <RadiusField />
      <AngelField />
      <InitialVelocityField />
    </Section>
  )
}
