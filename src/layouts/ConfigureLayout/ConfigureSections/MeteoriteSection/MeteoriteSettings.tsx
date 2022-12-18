import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined'
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
    <Section title='Данные метеорита' Icon={DataObjectOutlinedIcon}>
      <MassField />
      <DistanceField />
      <RadiusField />
      <AngelField />
      <InitialVelocityField />
    </Section>
  )
}
