import { SliderTextField, ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteMass } from 'selectors'
import { setMeteoriteData } from 'slices'

export const MassField = () => {
  const dispatch = useDispatch()
  const mass = useSelector(selectMeteoriteMass)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        mass: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={0}
      max={100 * 1000}
      step={1000}
      adornment='𝓜'
      label='Масса, кг'
      value={mass}
      onChange={handleChange}
    />
  )
}
