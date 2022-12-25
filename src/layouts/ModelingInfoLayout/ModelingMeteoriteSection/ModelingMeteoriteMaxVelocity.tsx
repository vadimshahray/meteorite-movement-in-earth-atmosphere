import { useSelector } from 'react-redux'
import { selectModelingMeteoriteMaxVelocity } from 'selectors'
import { metersToVelocityString } from 'utils'

export const ModelingMeteoriteMaxVelocity = () => {
  const maxVelocity = useSelector(selectModelingMeteoriteMaxVelocity)

  return <>{metersToVelocityString(maxVelocity)}</>
}
