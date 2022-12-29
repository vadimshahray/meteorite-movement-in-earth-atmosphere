import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteDistance } from 'selectors'
import { setMeteoriteData } from 'slices'

export const DistanceField = () => {
  const dispatch = useDispatch()
  const distance = useSelector(selectMeteoriteDistance)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        distance: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={1000000}
      step={1000}
      adornment='𝓓'
      label='Расстояние от поверхности планеты, м'
      value={distance}
      onChange={handleChange}
    />
  )
}
