import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'

export const GField = () => {
  const dispatch = useDispatch()
  const g = useSelector(selectPlanetg)

  const handleValid = useCallback(
    (value: number) => {
      dispatch(
        setPlanetData({
          g: { short: value },
        }),
      )
    },
    [dispatch],
  )

  return (
    <ValidatedTextField
      value={g.toString()}
      adornment='g'
      label='Ускорение свободного падения, м/с²'
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
