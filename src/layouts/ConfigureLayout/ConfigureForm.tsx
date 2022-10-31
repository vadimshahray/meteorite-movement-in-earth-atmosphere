import { yupResolver } from '@hookform/resolvers/yup'
import { Container, LaunchButton } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ConfigureSections } from './ConfigureSections'

type Fields = {
  g: number
}

const schema = yup.object({
  g: yup
    .number()
    .typeError('Не число')
    .positive('Не положительное число')
    .required('Обязательно'),
})

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  const form = useForm<Fields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const handleLaunch = () => {
    form.trigger()
  }

  return (
    <Container>
      <FormProvider {...form}>
        <ConfigureSections />
      </FormProvider>

      <LaunchButton onClick={handleLaunch} />
    </Container>
  )
}
