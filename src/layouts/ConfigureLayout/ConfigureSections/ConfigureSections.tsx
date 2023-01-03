import { Container } from 'components'
import { MeteoriteSettings } from './MeteoriteSection'
import { InteractiveControlsSection } from './InteractiveControlsSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  return (
    <Container disableGuttersV>
      <MeteoriteSettings />

      <InteractiveControlsSection />
    </Container>
  )
}
