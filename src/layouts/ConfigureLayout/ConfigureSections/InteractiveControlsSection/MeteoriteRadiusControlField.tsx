import { InfoOutlined } from '@mui/icons-material'
import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectInteractiveControlValue } from 'selectors'
import { setInteractiveControlValue } from 'slices'

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
