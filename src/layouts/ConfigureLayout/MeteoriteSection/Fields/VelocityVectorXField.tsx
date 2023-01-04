import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { setMeteoriteData } from 'slices'
import { SliderTextField } from 'components'
import { MouseOutlined } from '@mui/icons-material'
import { METEORITE_LIMITS } from 'constants/meteorite'
import { selectMeteoriteVelocityVectorX } from 'selectors'

export const VelocityVectorXField = () => {
  const dispatch = useDispatch()

  const vectorX = useSelector(selectMeteoriteVelocityVectorX)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        velocityVectorX: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={METEORITE_LIMITS.VELOCITY_VECTOR_MIN}
      max={METEORITE_LIMITS.VELOCITY_VECTOR_MAX}
      step={0.0001}
      label='Вектор скорости, X коорд.'
      adornment='𝓥⃗₁'
      value={vectorX}
      onChange={handleChange}
      EndIcon={MouseOutlined}
      endIconTooltip='Вы можете изменять этот параметр, используя ЛКМ'
    />
  )
}
