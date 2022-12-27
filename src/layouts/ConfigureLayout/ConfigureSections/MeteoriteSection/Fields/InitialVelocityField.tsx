import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteInitialVelocity } from 'selectors'
import { setMeteoriteData } from 'slices'

export const InitialVelocityField = () => {
  const dispatch = useDispatch()
  const initialVelocity = useSelector(selectMeteoriteInitialVelocity)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        initialVelocity: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={100}
      step={0.5}
      adornment='𝓥₀'
      label='Начальная скорость, м/с'
      initialValue={initialVelocity}
      onChange={handleChange}
    />
  )
}
