import { Container, LaunchButton } from 'components'
import { ConfigureSections } from './ConfigureSections'

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  const handleLaunch = () => {}

  return (
    <Container disableGutters>
      <ConfigureSections />

      <LaunchButton onClick={handleLaunch} />
    </Container>
  )
}
