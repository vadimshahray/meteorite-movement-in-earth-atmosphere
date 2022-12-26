import { DataObjectOutlined } from '@mui/icons-material'
import { Section } from 'components'
import {
  MassField,
  RadiusField,
  DistanceField,
  AngelField,
  InitialVelocityField,
} from './Fields'

export const MeteoriteSettings = () => {
  return (
    <Section title='Характеристики метеорита' Icon={DataObjectOutlined}>
      <MassField />

      <DistanceField />

      <RadiusField />

      <AngelField />

      <InitialVelocityField />
    </Section>
  )
}
