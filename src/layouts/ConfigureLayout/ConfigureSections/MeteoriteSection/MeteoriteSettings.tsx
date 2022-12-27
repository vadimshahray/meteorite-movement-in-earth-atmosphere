import { DataObjectOutlined } from '@mui/icons-material'
import { Section } from 'components'
import {
  MassField,
  RadiusField,
  DistanceField,
  InitialVelocityField,
} from './Fields'

export const MeteoriteSettings = () => {
  return (
    <Section title='Характеристики метеорита' Icon={DataObjectOutlined}>
      <MassField />

      <DistanceField />

      <RadiusField />

      <InitialVelocityField />
    </Section>
  )
}
