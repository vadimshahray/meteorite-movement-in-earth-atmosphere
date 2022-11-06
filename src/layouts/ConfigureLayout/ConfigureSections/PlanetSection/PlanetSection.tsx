import { PickPlanetModelDataButton } from './PickPlanetModelDataButton'
import { GVariableView } from './VariableViews'
import { PlanetRField, PlanetMField } from '../Fields'

/** Секция конфигурации "Планета" */
export const PlanetSection = () => {
  return (
    <div>
      <PickPlanetModelDataButton />

      <PlanetRField />
      <PlanetMField />
      <GVariableView />
    </div>
  )
}
