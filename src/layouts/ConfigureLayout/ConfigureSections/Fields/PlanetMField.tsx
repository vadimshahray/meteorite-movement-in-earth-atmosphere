import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetM } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'

const schema = object({
  M: positiveNumberRule,
})

const extractValueObject = (input: string) => ({
  M: input,
})

export const PlanetMField = () => {
  const dispatch = useDispatch()
  const M = useSelector(selectPlanetM)

  const handleValid = (data: any) => {
    dispatch(
      setPlanetData({
        M: data.M as number,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Масса планеты'
      value={M.toString()}
      schema={schema}
      extractValueObject={extractValueObject}
      onValid={handleValid}
    />
  )
}
