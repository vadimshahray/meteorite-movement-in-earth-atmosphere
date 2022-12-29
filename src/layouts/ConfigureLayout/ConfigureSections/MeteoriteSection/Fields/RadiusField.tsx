import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteRadius } from 'selectors'
import { setMeteoriteData } from 'slices'

export const RadiusField = () => {
  const dispatch = useDispatch()

  const radius = useSelector(selectMeteoriteRadius)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        radius: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={100 * 1000}
      step={1000}
      label='Радиус, м'
      adornment='𝓡'
      value={radius}
      onChange={handleChange}
    />
  )
}
