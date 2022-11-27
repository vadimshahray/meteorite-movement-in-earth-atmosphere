import { NumberFieldGroup, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetM } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { PowerTextField } from './PowerTextField'

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
        label='Масса планеты, кг'
        adornment='M'
        value={M.value.toString()}
        rule={positiveNumberRule}
        onValid={handleValueValid}
      />

      <PowerTextField power={M.power} onValid={handlePowerValid} />
    </NumberFieldGroup>
  )
}
