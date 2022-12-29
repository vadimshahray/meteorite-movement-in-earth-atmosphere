import { MouseOutlined } from '@mui/icons-material'
import { Section } from 'components'
import { MeteoriteDistanceControlField } from './MeteoriteDistanceControlField'
import { MeteoriteRadiusControlField } from './MeteoriteRadiusControlField'

export const InteractiveControlsSection = () => {
  return (
    <Section
      title='Чувствительность контроллеров'
      Icon={MouseOutlined}
      collapsible
    >
      <MeteoriteRadiusControlField />

      <MeteoriteDistanceControlField />
    </Section>
  )
}
