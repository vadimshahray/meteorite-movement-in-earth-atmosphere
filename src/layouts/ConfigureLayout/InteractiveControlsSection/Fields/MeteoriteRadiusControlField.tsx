import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { SliderTextField } from '@components'
import { InfoOutlined } from '@mui/icons-material'
import { setInteractiveControlValue } from '@slices'
import { selectInteractiveControlValue } from '@selectors'

export const MeteoriteRadiusControlField = () => {
  const dispatch = useDispatch()

  const radiusControlValue = useSelector(
    selectInteractiveControlValue('@MeteoriteRadiusControl'),
  )

  const onChange = (value: number) => {
    dispatch(
      setInteractiveControlValue({ key: '@MeteoriteRadiusControl', value }),
    )
  }

  return (
    <SliderTextField
      label='Контроллер радиуса метеорита, м'
      min={1}
      max={10}
      step={0.5}
      value={radiusControlValue}
      EndIcon={InfoOutlined}
      endIconTooltip='Колесико мышки или тачпад'
      onChange={onChange}
    />
  )
}
