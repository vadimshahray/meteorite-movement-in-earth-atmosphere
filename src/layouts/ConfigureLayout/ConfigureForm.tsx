import { Container, LaunchButton } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import { ConfigureSections } from './ConfigureSections/ConfigureSections'

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  const form = useForm()

  const handleLaunch = () => {}

  return (
    <Container>
      <FormProvider {...form}>
        <form>
          <ConfigureSections />
        </form>

        <LaunchButton onClick={handleLaunch} />
      </FormProvider>
    </Container>
  )
}
