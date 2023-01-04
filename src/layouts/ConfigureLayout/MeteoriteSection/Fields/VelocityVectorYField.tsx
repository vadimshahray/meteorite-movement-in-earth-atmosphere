import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { SliderTextField } from '@components'
import { METEORITE_LIMITS } from '@constants'
import { MouseOutlined } from '@mui/icons-material'
import { setMeteoriteVelocityVector } from '@slices'
import { selectMeteoriteVelocityVectorY } from '@selectors'

export const VelocityVectorYField = () => {
  const dispatch = useDispatch()

  const vectorY = useSelector(selectMeteoriteVelocityVectorY)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteVelocityVector({
        y: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={METEORITE_LIMITS.VELOCITY_VECTOR_MIN}
      max={METEORITE_LIMITS.VELOCITY_VECTOR_MAX}
      step={0.0001}
      label='Вектор скорости, Y коорд.'
      adornment='𝓥⃗₂'
      value={vectorY}
      onChange={handleChange}
      EndIcon={MouseOutlined}
      endIconTooltip='Вы можете изменять этот параметр, используя ЛКМ'
    />
  )
}
