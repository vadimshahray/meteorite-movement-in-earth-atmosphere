import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVectorY } from 'selectors'
import { setMeteoriteData } from 'slices'

export const VelocityVectorYField = () => {
  const dispatch = useDispatch()

  const vectorY = useSelector(selectMeteoriteVelocityVectorY)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        velocityVectorY: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={100 * 1000}
      step={1000}
      label='Вектор скорости, Y коорд.'
      adornment='𝓥⃗₂'
      value={vectorY}
      onChange={handleChange}
    />
  )
}
