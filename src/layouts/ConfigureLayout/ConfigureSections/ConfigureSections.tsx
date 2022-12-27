import { Container } from 'components'
import React from 'react'
import { MeteoriteSettings, VelocityVectorSection } from './MeteoriteSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  return (
    <Container disableGutters>
      <Container>
        <MeteoriteSettings />
        <VelocityVectorSection />
      </Container>
    </Container>
  )
}
