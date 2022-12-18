import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteDistance } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const DistanceField = () => {
  const dispatch = useDispatch()
  const distance = useSelector(selectMeteoriteDistance)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        distance: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='y₀'
      label='Расстояние от поверхности планеты, м'
      initialValue={distance.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
