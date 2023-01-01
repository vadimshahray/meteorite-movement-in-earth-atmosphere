import { SliderTextField } from 'components'
import { METEORITE_LIMITS } from 'consts'
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
      min={METEORITE_LIMITS.INITIAL_VELOCITY_MIN}
      max={METEORITE_LIMITS.INITIAL_VELOCITY_MAX}
      step={1}
      adornment='𝓥₀'
      label='Начальная скорость, м/с'
      value={initialVelocity}
      onChange={handleChange}
    />
  )
}
