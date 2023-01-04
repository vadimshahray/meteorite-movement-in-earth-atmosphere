import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { SliderTextField } from '@components'
import { METEORITE_LIMITS } from '@constants'
import { MouseOutlined } from '@mui/icons-material'
import { setMeteoriteVelocityVector } from '@slices'
import { selectMeteoriteVelocityVectorX } from '@selectors'

export const VelocityVectorXField = () => {
  const dispatch = useDispatch()

  const vectorX = useSelector(selectMeteoriteVelocityVectorX)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteVelocityVector({
        x: value,
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
