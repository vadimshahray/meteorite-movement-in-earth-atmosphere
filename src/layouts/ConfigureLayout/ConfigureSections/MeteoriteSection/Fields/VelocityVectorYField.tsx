import { MouseOutlined } from '@mui/icons-material'
import { SliderTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVectorY } from 'selectors'
import { setMeteoriteData } from 'slices'

export const VelocityVectorYField = () => {
  const dispatch = useDispatch()

  const vectorY = useSelector(selectMeteoriteVelocityVectorY)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        velocityVectorY: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={-100}
      max={100}
      step={1}
      label='Вектор скорости, Y коорд.'
      adornment='𝓥⃗₂'
      value={vectorY}
      onChange={handleChange}
      EndIcon={MouseOutlined}
      endIconTooltip='Вы можете изменять этот параметр, используя ЛКМ'
    />
  )
}
