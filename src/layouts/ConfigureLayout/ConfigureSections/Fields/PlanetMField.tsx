import { NumberFieldGroup, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetM } from 'selectors'
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

export const PlanetMField = () => {
  const dispatch = useDispatch()
  const M = useSelector(selectPlanetM)

  const handleValid = useCallback(
    ({ value, power }: Partial_PowerNumber) => {
      dispatch(
        setPlanetData({
          M: { value, power },
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
        label='Масса планеты'
        value={M.value.toString()}
        schema={schema}
        extractValueObject={extractValueObject}
        onValid={handleValueValid}
      />

      <PowerTextField power={M.power} onValid={handlePowerValid} />
    </NumberFieldGroup>
  )
}
