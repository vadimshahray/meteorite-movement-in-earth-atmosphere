import { DataObjectOutlined } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { Section } from 'components'
import {
  MassField,
  RadiusField,
  DistanceField,
  InitialVelocityField,
  VelocityVectorXField,
  VelocityVectorYField,
} from './Fields'

export const MeteoriteSettings = () => {
  return (
    <Section title='Характеристики метеорита' Icon={DataObjectOutlined}>
      <MassField />

      <DistanceField />

      <RadiusField />

      <InitialVelocityField />

      <Stack direction='row' spacing={1}>
        <VelocityVectorXField />
        <VelocityVectorYField />
      </Stack>
    </Section>
  )
}
