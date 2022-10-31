import { GVariableView } from './VariableViews'
import { PlanetRField, PlanetMField } from '../Fields'

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
