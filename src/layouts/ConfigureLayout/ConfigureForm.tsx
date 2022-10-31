import { Container, LaunchButton } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import { ConfigureSections } from './ConfigureSections'

type Fields = {
  g: number
}

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  const form = useForm<Fields>({
    mode: 'onChange',
  })

  const handleLaunch = () => {}

  return (
    <Container>
      <FormProvider {...form}>
        <form>
          <ConfigureSections />
        </form>
      </FormProvider>

      <LaunchButton onClick={handleLaunch} />
    </Container>
  )
}
