import { Section } from 'components'
import { MouseOutlined } from '@mui/icons-material'
import { MeteoriteRadiusControlField } from './MeteoriteRadiusControlField'
import { MeteoriteDistanceControlField } from './MeteoriteDistanceControlField'
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
