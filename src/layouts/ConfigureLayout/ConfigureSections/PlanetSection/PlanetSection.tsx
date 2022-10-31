import { GVariableView } from './VariableViews'
import { PlanetRField } from '../Fields'

/** Секция конфигурации "Планета" */
export const PlanetSection = () => {
  return (
    <div>
      <PlanetRField />
      <GVariableView />
    </div>
  )
}
