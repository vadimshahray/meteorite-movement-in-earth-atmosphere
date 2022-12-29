import { Container } from 'components'
import React from 'react'
import { InteractiveControlsSection } from './InteractiveControlsSection'
import { MeteoriteSettings } from './MeteoriteSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  return (
    <Container sx={{ paddingTop: 0, paddingBottom: 0 }}>
      <MeteoriteSettings />

      <InteractiveControlsSection />
    </Container>
  )
}
