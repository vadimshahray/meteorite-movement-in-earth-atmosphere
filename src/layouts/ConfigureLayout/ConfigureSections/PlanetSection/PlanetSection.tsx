import React from 'react'
import { PlanetRField, PlanetMField } from './Fields'
import { GVariableView } from './VariableViews'

/** Секция конфигурации "Планета" */
export const PlanetSection = () => {
  return (
    <div>
      <PlanetRField />
      <PlanetMField />
      <GVariableView />
    </div>
  )
}
