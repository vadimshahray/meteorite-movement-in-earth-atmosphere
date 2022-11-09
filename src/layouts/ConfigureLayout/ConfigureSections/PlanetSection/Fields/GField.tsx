import { NumberFieldGroup, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { PowerTextField } from './PowerTextField'

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
    (value: number) => {
      handleValid({ value })
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
        label='Ускорение свободного падения, м/с²'
        rule={positiveNumberRule}
        onValid={handleValueValid}
      />

      <PowerTextField power={g.power} onValid={handlePowerValid} />
    </NumberFieldGroup>
  )
}
