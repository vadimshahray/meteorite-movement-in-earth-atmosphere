import { useSelector } from 'react-redux'
import { metersToVelocityString } from '@utils'
import { selectModelingMeteoriteMaxVelocity } from '@selectors'

export const ModelingMeteoriteMaxVelocity = () => {
  const maxVelocity = useSelector(selectModelingMeteoriteMaxVelocity)

  return (
    <span style={{ fontFamily: 'Fira Code, monospace' }}>
      {metersToVelocityString(maxVelocity)}
    </span>
  )
}
