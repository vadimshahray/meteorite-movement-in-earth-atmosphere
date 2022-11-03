import { ValidatedTextField } from 'components/ValidatedTextField'
import { useDispatch } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'
import { setPlanetData } from 'slices'
import { NumberCommaToDot } from 'utils'
import * as yup from 'yup'
import { RequiredNumberSchema } from 'yup/lib/number'
import { AssertsShape, AnyObject } from 'yup/lib/object'

const schema = yup.object({
  g: yup
    .number()
    .transform(NumberCommaToDot)
    .typeError('Не число')
    .positive('Не положительное число')
    .required('Обязательно'),
})

const extractValueObject = (input: string) => ({
  g: input,
})

export const GField = () => {
  const dispatch = useDispatch()
  const g = useSelector(selectPlanetg)

  const handleValid = ({
    g: value,
  }: AssertsShape<{
    g: RequiredNumberSchema<number | undefined, AnyObject>
  }>) => {
    dispatch(
      setPlanetData({
        g: {
          short: value,
        },
      }),
    )
  }

  return (
    <ValidatedTextField
      value={g.toString()}
      label='Ускорение свободного падения'
      schema={schema}
      onValid={handleValid}
      extractValueObject={extractValueObject}
    />
  )
}
