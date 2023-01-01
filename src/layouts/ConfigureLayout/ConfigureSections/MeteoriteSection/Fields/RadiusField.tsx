import { MouseOutlined } from '@mui/icons-material'
import { SliderTextField } from 'components'
import { METEORITE_INPUT } from 'consts'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteRadius } from 'selectors'
import { setMeteoriteData } from 'slices'

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
      min={METEORITE_INPUT.RADIUS_MIN}
      max={METEORITE_INPUT.RADIUS_MAX}
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
