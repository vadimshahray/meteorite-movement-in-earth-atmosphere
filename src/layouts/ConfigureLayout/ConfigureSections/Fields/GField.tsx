import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'

const schema = object({
  g: positiveNumberRule,
})

const extractValueObject = (input: string) => ({
  g: input,
})

export const GField = () => {
  const dispatch = useDispatch()
  const g = useSelector(selectPlanetg)

  const handleValid = (data: any) => {
    dispatch(
      setPlanetData({
        g: {
          short: data.g as number,
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
