import { useSelector } from 'react-redux'
import { metersToDistanceString } from '@utils'
import { selectModelingMeteoriteDistance } from '@selectors'

export const ModelingMeteoriteDistance = () => {
  const distance = useSelector(selectModelingMeteoriteDistance)

  return (
    <span style={{ fontFamily: 'Fira Code, monospace' }}>
      {metersToDistanceString(distance)}
    </span>
  )
}
