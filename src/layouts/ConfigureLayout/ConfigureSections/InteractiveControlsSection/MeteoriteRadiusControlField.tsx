import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { SliderTextField } from 'components'
import { InfoOutlined } from '@mui/icons-material'
import { setInteractiveControlValue } from 'slices'
import { selectInteractiveControlValue } from 'selectors'

export const MeteoriteRadiusControlField = () => {
  const dispatch = useDispatch()

  const radiusControlValue = useSelector(
    selectInteractiveControlValue('@MeteoriteRadiusControl'),
  )

  const onChange = (value: number) => {
    dispatch(
      setInteractiveControlValue({ control: '@MeteoriteRadiusControl', value }),
    )
  }

  return (
    <SliderTextField
      label='Контроллер радиуса метеорита, м'
      min={10}
      max={10 * 1000}
      step={10}
      value={radiusControlValue}
      EndIcon={InfoOutlined}
      endIconTooltip='Колесико мышки или тачпад'
      onChange={onChange}
    />
  )
}
