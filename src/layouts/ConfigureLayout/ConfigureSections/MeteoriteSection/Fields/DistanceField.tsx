import { Slider } from 'components'
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
    <Slider
      min={0}
      max={1000000}
      step={1000}
      label='Расстояние от поверхности планеты, м'
      initialValue={distance}
      onChange={handleChange}
    />
  )
}
