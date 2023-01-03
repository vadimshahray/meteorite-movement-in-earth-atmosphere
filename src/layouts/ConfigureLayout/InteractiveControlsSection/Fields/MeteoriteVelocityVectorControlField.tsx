import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { SliderTextField } from 'components'
import { InfoOutlined } from '@mui/icons-material'
import { setInteractiveControlValue } from 'slices'
import { selectInteractiveControlValue } from 'selectors'

export const MeteoriteVectorVelocityControlField = () => {
  const dispatch = useDispatch()

  const vectorControlValue = useSelector(
    selectInteractiveControlValue('@MeteoriteVelocityVectorControl'),
  )

  const onChange = (value: number) => {
    dispatch(
      setInteractiveControlValue({
        key: '@MeteoriteVelocityVectorControl',
        value,
      }),
    )
  }

  return (
    <SliderTextField
      label='Контроллер вектора скорости'
      min={0.1}
      max={1}
      step={0.1}
      value={vectorControlValue}
      EndIcon={InfoOutlined}
      endIconTooltip='ЛКМ'
      onChange={onChange}
    />
  )
}
