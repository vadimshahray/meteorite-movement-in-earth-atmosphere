import { Container, StartModelingButton } from 'components'
import { ConfigureSections } from './ConfigureSections'

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  return (
    <Container disableGutters>
      <ConfigureSections />

      <Container>
        <StartModelingButton />
      </Container>
    </Container>
  )
}
