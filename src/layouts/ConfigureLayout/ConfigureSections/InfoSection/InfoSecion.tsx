import { Container } from 'components'
import React from 'react'
import { AtmosphereInfo } from './AtmosphereInfo'
import { EarthInfo } from './EarthInfo'

export const InfoSection = () => {
  return (
    <Container disableGutters>
      <EarthInfo />
      <AtmosphereInfo />
    </Container>
  )
}
