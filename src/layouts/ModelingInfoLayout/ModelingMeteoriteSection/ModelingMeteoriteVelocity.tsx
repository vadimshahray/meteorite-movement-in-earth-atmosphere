import { useSelector } from 'react-redux'
import { metersToVelocityString } from 'utils'
import { selectModelingMeteoriteVelocity } from 'selectors'

export const ModelingMeteoriteVelocity = () => {
  const velocity = useSelector(selectModelingMeteoriteVelocity)

  return (
    <span style={{ fontFamily: 'Fira Code' }}>
      {metersToVelocityString(velocity)}
    </span>
  )
}
