import { MouseOutlined } from '@mui/icons-material'
import { SliderTextField } from 'components'
import { METEORITE_LIMITS } from 'consts'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteDistance } from 'selectors'
import { setMeteoriteData } from 'slices'

export const DistanceField = () => {
  const dispatch = useDispatch()
  const distance = useSelector(selectMeteoriteDistance)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        distance: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={METEORITE_LIMITS.DISTANCE_MIN}
      max={METEORITE_LIMITS.DISTANCE_MAX}
      step={1000}
      adornment='𝓓'
      label='Расстояние от поверхности планеты, м'
      value={distance}
      onChange={handleChange}
      EndIcon={MouseOutlined}
      endIconTooltip='Вы можете изменять этот параметр, используя зажатую клавишу Alt и колесико мышки или тачпад'
    />
  )
}
