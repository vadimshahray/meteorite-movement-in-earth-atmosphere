import { NumberFieldGroup, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'
import { PowerTextField } from './PowerTextField'

const schema = object({
  value: positiveNumberRule,
})

const extractValueObject = (input: string) => ({
  value: input,
})

export const GField = () => {
  const dispatch = useDispatch()
  const g = useSelector(selectPlanetg)

  const handleValid = useCallback(
    ({ value, power }: Partial_PowerNumber) => {
      dispatch(
        setPlanetData({
          g: { short: { value, power } },
        }),
      )
    },
    [dispatch],
  )

  const handleValueValid = useCallback(
    (data: any) => {
      handleValid({ value: data.value as number })
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
        value={g.value.toString()}
        label='Ускорение свободного падения'
        schema={schema}
        onValid={handleValueValid}
        extractValueObject={extractValueObject}
      />

      <PowerTextField power={g.power} onValid={handlePowerValid} />
    </NumberFieldGroup>
  )
}
