import { METEORITE_MODEL_NORM_RADIUS } from 'layouts/ModelingLayout/Models'
import { useSelector } from 'react-redux'
import { selectMeteoriteR } from 'selectors'
import { scaleMeters } from 'utils'

export const useMeteoriteRadius = () => {
  const radius = useSelector(selectMeteoriteR)

  return {
    scale: METEORITE_MODEL_NORM_RADIUS * scaleMeters(radius),
    radius: scaleMeters(radius),
  }
}
