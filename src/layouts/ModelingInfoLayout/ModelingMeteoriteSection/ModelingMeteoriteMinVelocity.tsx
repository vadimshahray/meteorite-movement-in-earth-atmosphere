import { useSelector } from 'react-redux'
import { selectModelingMeteoriteMinVelocity } from 'selectors'
import { metersToVelocityString } from 'utils'

export const ModelingMeteoriteMinVelocity = () => {
  const minVelocity = useSelector(selectModelingMeteoriteMinVelocity)

  return <>{metersToVelocityString(minVelocity)}</>
}
