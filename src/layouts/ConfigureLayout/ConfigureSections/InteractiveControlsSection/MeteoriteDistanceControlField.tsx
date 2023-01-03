import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { SliderTextField } from 'components'
import { InfoOutlined } from '@mui/icons-material'
import { setInteractiveControlValue } from 'slices'
import { selectInteractiveControlValue } from 'selectors'

export const MeteoriteDistanceControlField = () => {
  const dispatch = useDispatch()

  const distanceControlValue = useSelector(
    selectInteractiveControlValue('@MeteoriteDistanceControl'),
  )

  const onChange = (value: number) => {
    dispatch(
      setInteractiveControlValue({
        control: '@MeteoriteDistanceControl',
        value,
      }),
    )
  }

  return (
    <SliderTextField
      label='Контроллер расстояния метеорита, м'
      min={100}
      max={10 * 1000}
      step={100}
      value={distanceControlValue}
      onChange={onChange}
      EndIcon={InfoOutlined}
      endIconTooltip='Alt + колесико мышки или тачпад'
    />
  )
}
