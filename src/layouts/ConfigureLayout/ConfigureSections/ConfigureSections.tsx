import { Container } from 'components'
import React from 'react'
import { MeteoriteSettings } from './MeteoriteSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  return (
    <Container disableGutters>
      <Container>
        <MeteoriteSettings />
      </Container>
    </Container>
  )
}
