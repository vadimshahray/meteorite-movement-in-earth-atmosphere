import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectInteractiveControlValue } from 'selectors'
import { setInteractiveControlValue } from 'slices'

export const MeteoriteRadiusControlField = () => {
  const dispatch = useDispatch()

  const radiusControlValue = useSelector(
    selectInteractiveControlValue('radius'),
  )

  const onChange = (value: number) => {
    dispatch(setInteractiveControlValue({ control: 'radius', value }))
  }

  return (
    <SliderTextField
      label='Контроллер радиуса метеорита, м'
      min={10}
      max={10 * 1000}
      step={10}
      value={radiusControlValue}
      onChange={onChange}
    />
  )
}
