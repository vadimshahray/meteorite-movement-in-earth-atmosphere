import { useSelector } from 'react-redux'
import { metersToVelocityString } from 'utils'
import { selectModelingMeteoriteAverageVelocity } from 'selectors'

export const ModelingMeteoriteAverageVelocity = () => {
  const averageVelocity = useSelector(selectModelingMeteoriteAverageVelocity)

  return (
    <span style={{ fontFamily: 'Fira Code' }}>
      {metersToVelocityString(averageVelocity)}
    </span>
  )
}
