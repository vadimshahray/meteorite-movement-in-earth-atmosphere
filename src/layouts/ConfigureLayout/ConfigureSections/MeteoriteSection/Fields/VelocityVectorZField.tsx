import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVectorZ } from 'selectors'
import { setMeteoriteData } from 'slices'

export const VelocityVectorZField = () => {
  const dispatch = useDispatch()

  const vectorZ = useSelector(selectMeteoriteVelocityVectorZ)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        velocityVectorZ: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={100 * 1000}
      step={1000}
      label='Z координата'
      adornment='𝓥⃗₃'
      value={vectorZ}
      onChange={handleChange}
    />
  )
}
