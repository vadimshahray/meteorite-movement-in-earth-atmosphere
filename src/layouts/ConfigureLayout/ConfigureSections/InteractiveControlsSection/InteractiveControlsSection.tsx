import { MouseOutlined } from '@mui/icons-material'
import { Section } from 'components'
import { MeteoriteDistanceControlField } from './MeteoriteDistanceControlField'
import { MeteoriteRadiusControlField } from './MeteoriteRadiusControlField'
import { MeteoriteVectorVelocityControlField } from './MeteoriteVelocityVectorControlField'

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
