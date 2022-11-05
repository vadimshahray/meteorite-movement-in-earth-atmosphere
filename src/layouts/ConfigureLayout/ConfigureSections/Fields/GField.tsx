import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import * as yup from 'yup'
import { RequiredNumberSchema } from 'yup/lib/number'
import { AssertsShape, AnyObject } from 'yup/lib/object'

const schema = yup.object({
  g: positiveNumberRule,
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
