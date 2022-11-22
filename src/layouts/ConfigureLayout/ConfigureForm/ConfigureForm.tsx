import { Container } from 'components'
import { ConfigureSections } from '../ConfigureSections'

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  return (
    <Container disableGutters>
      <ConfigureSections />
    </Container>
  )
}
