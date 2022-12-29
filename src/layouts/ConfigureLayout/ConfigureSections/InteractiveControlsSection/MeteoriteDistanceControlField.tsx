import { InfoOutlined } from '@mui/icons-material'
import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectInteractiveControlValue } from 'selectors'
import { setInteractiveControlValue } from 'slices'

export const MeteoriteDistanceControlField = () => {
  const dispatch = useDispatch()

  const distanceControlValue = useSelector(
    selectInteractiveControlValue('distance'),
  )

  const onChange = (value: number) => {
    dispatch(setInteractiveControlValue({ control: 'distance', value }))
  }

  return (
    <SliderTextField
      label='Контроллер расстояния метеорита, м'
      min={500}
      max={100 * 1000}
      step={1000}
      value={distanceControlValue}
      onChange={onChange}
      EndIcon={InfoOutlined}
      endIconTooltip='Alt + колесико мышки или тачпад'
    />
  )
}
