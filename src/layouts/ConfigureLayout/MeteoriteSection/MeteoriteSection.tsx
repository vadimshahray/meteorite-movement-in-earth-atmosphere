import { Section } from '@components'
import { Stack } from '@mui/material'
import { DataObjectOutlined } from '@mui/icons-material'
import {
  MassField,
  RadiusField,
  DistanceField,
  InitialVelocityField,
  VelocityVectorXField,
  VelocityVectorYField,
} from './Fields'
import { VelocityAngle } from './VelocityAngle'

export const MeteoriteSection = () => {
  return (
    <Section title='Характеристики метеорита' Icon={DataObjectOutlined}>
      <MassField />

      <RadiusField />

      <DistanceField />

      <InitialVelocityField />

      <Stack>
        <Stack direction='row' spacing={1}>
          <VelocityVectorXField />

          <VelocityVectorYField />
        </Stack>

        <VelocityAngle />
      </Stack>
    </Section>
  )
}
