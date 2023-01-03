import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { METEORITE_LIMITS } from 'consts'
import { setMeteoriteData } from 'slices'
import { SliderTextField } from 'components'
import { selectMeteoriteMass } from 'selectors'

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
      min={METEORITE_LIMITS.MASS_MIN}
      max={METEORITE_LIMITS.MASS_MAX}
      step={1000}
      adornment='𝓜'
      label='Масса, кг'
      value={mass}
      onChange={handleChange}
    />
  )
}
