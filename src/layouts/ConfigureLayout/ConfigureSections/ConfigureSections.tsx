import { useSelector } from 'react-redux'
import { selectActiveSection } from 'selectors'
import { AtmosphereSection } from './AtmosphereSection'
import { PlanetSection } from './PlanetSection'
import { SubjectSection } from './SubjectSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  const activeSectionI = useSelector(selectActiveSection)
  const sections: JSX.Element[] = [
    <SubjectSection />,
    <PlanetSection />,
    <AtmosphereSection />,
  ]

  return sections[activeSectionI]
}
