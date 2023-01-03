import { Section } from 'components'
import { MouseOutlined } from '@mui/icons-material'
import {
  MeteoriteRadiusControlField,
  MeteoriteDistanceControlField,
  MeteoriteVectorVelocityControlField,
} from './Fields'

export const InteractiveControlsSection = () => {
  return (
    <Section
      title='Чувствительность контроллеров'
      Icon={MouseOutlined}
      collapsible
    >
      <MeteoriteRadiusControlField />

      <MeteoriteDistanceControlField />

      <MeteoriteVectorVelocityControlField />
    </Section>
  )
}
