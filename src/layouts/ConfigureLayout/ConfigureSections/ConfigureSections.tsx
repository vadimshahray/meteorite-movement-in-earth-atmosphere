import { Container } from 'components'
import React from 'react'
import { InteractiveControlsSection } from './InteractiveControlsSection'
import { MeteoriteSettings } from './MeteoriteSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  return (
    <Container disableGuttersV>
      <MeteoriteSettings />

      <InteractiveControlsSection />
    </Container>
  )
}
