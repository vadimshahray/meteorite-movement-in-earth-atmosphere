import { NumberFieldGroup, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'
import { PowerTextField } from './PowerTextField'

const schema = object({
  value: positiveNumberRule.clone(),
})

const extractValueObject = (input: string) => ({
  value: input,
})

export const PlanetRField = () => {
  const dispatch = useDispatch()
  const R = useSelector(selectPlanetR)

  const handleValid = useCallback(
    ({ value, power }: Partial_PowerNumber) => {
      dispatch(
        setPlanetData({
          R: { value, power },
        }),
      )
    },
    [dispatch],
  )

  const handleValueValid = useCallback(
    (data: any) => {
      handleValid({ value: data.value })
    },
    [handleValid],
  )
  const handlePowerValid = useCallback(
    (power: number) => {
      handleValid({ power })
    },
    [handleValid],
  )

  return (
    <NumberFieldGroup>
      <ValidatedTextField
        label='Радиус планеты, м'
        value={R.value.toString()}
        schema={schema}
        extractValueObject={extractValueObject}
        onValid={handleValueValid}
      />

      <PowerTextField power={R.power} onValid={handlePowerValid} />
    </NumberFieldGroup>
  )
}
