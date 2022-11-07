import { useConfigureToolbar } from 'hooks'
import React, { useEffect } from 'react'
import { PickPlanetModelDataButton } from './PickPlanetModelDataButton'
import { GVariableView } from './VariableViews'
import { PlanetRField, PlanetMField } from '../Fields'

/** Секция конфигурации "Планета" */
export const PlanetSection = () => {
  const { setActionButton } = useConfigureToolbar()

  useEffect(() => {
    setActionButton(<PickPlanetModelDataButton />)

    return () => {
      setActionButton()
    }
  }, [setActionButton])

  return (
    <div>
      <PlanetRField />
      <PlanetMField />
      <GVariableView />
    </div>
  )
}
