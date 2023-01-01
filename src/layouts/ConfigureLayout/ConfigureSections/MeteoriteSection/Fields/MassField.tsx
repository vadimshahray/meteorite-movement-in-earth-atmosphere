import { SliderTextField, ValidatedTextField } from 'components'
import { METEORITE_INPUT } from 'consts'
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
      min={METEORITE_INPUT.MASS_MIN}
      max={METEORITE_INPUT.MASS_MAX}
      step={1000}
      adornment='𝓜'
      label='Масса, кг'
      value={mass}
      onChange={handleChange}
    />
  )
}
