import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoritey0 } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const YField = () => {
  const dispatch = useDispatch()
  const y0 = useSelector(selectMeteoritey0)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        y0: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='y₀'
      label='Расстояние от поверхности планеты, м'
      initialValue={y0.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
