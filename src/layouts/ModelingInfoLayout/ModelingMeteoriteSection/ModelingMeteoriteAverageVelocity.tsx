import { useSelector } from 'react-redux'
import { selectModelingMeteoriteAverageVelocity } from 'selectors'
import { metersToVelocityString } from 'utils'

export const ModelingMeteoriteAverageVelocity = () => {
  const averageVelocity = useSelector(selectModelingMeteoriteAverageVelocity)

  return (
    <span style={{ fontFamily: 'Fira Code' }}>
      {metersToVelocityString(averageVelocity)}
    </span>
  )
}
