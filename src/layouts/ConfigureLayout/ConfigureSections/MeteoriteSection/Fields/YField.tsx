import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const YField = () => {
  const dispatch = useDispatch()

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        y0: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='y₀'
      label='Расстояние от поверхности планеты, м'
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
