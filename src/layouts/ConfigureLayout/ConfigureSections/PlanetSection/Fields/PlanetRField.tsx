import { NumberFieldGroup, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { PowerTextField } from './PowerTextField'

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
        label='Радиус планеты, м'
        value={R.value.toString()}
        rule={positiveNumberRule}
        onValid={handleValueValid}
      />

      <PowerTextField power={R.power} onValid={handlePowerValid} />
    </NumberFieldGroup>
  )
}
