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
        velocityVector: {
          x: value,
        },
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={100 * 1000}
      step={1000}
      label='X координата'
      adornment='𝓥⃗₁'
      initialValue={vectorX}
      onChange={handleChange}
    />
  )
}
