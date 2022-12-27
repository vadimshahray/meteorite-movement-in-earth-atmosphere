import { useSelector } from 'react-redux'
import { selectModelingMeteoriteDistance } from 'selectors'
import { metersToDistanceString } from 'utils'

export const ModelingMeteoriteDistance = () => {
  const distance = useSelector(selectModelingMeteoriteDistance)

  return (
    <span style={{ fontFamily: 'Fira Code' }}>
      {metersToDistanceString(distance)}
    </span>
  )
}
