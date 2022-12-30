import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVectorX } from 'selectors'
import { setMeteoriteData } from 'slices'

export const VelocityVectorXField = () => {
  const dispatch = useDispatch()

  const vectorX = useSelector(selectMeteoriteVelocityVectorX)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        velocityVectorX: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={-100}
      max={100}
      step={1}
      negative
      label='Вектор скорости, X коорд.'
      adornment='𝓥⃗₁'
      value={vectorX}
      onChange={handleChange}
    />
  )
}
