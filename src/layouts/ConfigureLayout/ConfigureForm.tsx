import { yupResolver } from '@hookform/resolvers/yup'
import { Container, LaunchButton } from 'components'
import { useDispatch } from 'hooks'
import { FormProvider, useForm } from 'react-hook-form'
import { setPlanetData } from 'slices'
import { NumberCommaToDot } from 'utils'
import * as yup from 'yup'
import { ConfigureSections } from './ConfigureSections'

type Fields = {
  R: number
  M: number
  g: number
}

const schema = yup.object({
  R: yup
    .number()
    .transform(NumberCommaToDot)
    .typeError('Не число')
    .positive('Не положительное число')
    .required('Обязательно'),
  M: yup
    .number()
    .transform(NumberCommaToDot)
    .typeError('Не число')
    .positive('Не положительное число')
    .required('Обязательно'),
  g: yup
    .number()
    .transform(NumberCommaToDot)
    .typeError('Не число')
    .positive('Не положительное число')
    .required('Обязательно'),
})

/** Содержит поля ввода для настроек моделей */
export const ConfigureForm = () => {
  const dispatch = useDispatch()

  const form = useForm<Fields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const handleLaunch = () => {
    form.handleSubmit(({ M, R, g }) => {
      dispatch(
        setPlanetData({
          M,
          R,
          g: {
            short: g,
          },
        }),
      )
    })()
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
