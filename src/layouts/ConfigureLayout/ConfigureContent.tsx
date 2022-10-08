import { Container, LaunchButton } from 'components'
import { ConfigureSections } from './ConfigureSections/ConfigureSections'

/** Основное содержимое раздела настройки приложения */
export const ConfigureContent = () => {
  return (
    <Container>
      <ConfigureSections />

      <LaunchButton />
    </Container>
  )
}
