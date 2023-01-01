import { InfoOutlined } from '@mui/icons-material'
import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'

export const MeteoriteVectorVelocityControlField = () => {
  const dispatch = useDispatch()

  // const vectorControlValue = useSelector(
  //   selectInteractiveControlValue('radius'),
  // )

  const onChange = (value: number) => {
    // dispatch(setInteractiveControlValue({ control: 'radius', value }))
  }

  return (
    <SliderTextField
      label='Контроллер вектора скорости'
      min={0.1}
      max={1}
      step={0.1}
      value={0.1}
      EndIcon={InfoOutlined}
      endIconTooltip='ЛКМ'
      onChange={onChange}
    />
  )
}
