import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { setMeteoriteData } from '@slices'
import { SliderTextField } from '@components'
import { METEORITE_LIMITS } from '@constants'
import { selectMeteoriteRadius } from '@selectors'
import { MouseOutlined } from '@mui/icons-material'

export const RadiusField = () => {
  const dispatch = useDispatch()

  const radius = useSelector(selectMeteoriteRadius)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        radius: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={METEORITE_LIMITS.RADIUS_MIN}
      max={METEORITE_LIMITS.RADIUS_MAX}
      step={1000}
      label='Радиус, м'
      adornment='𝓡'
      value={radius}
      EndIcon={MouseOutlined}
      endIconTooltip='Вы можете изменять этот параметр, используя колесико мышки или тачпад'
      onChange={handleChange}
    />
  )
}
