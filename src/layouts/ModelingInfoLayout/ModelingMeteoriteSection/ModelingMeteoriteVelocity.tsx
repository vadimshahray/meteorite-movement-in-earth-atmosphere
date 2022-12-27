import { useSelector } from 'react-redux'
import { selectModelingMeteoriteVelocity } from 'selectors'
import { metersToVelocityString } from 'utils'

export const ModelingMeteoriteVelocity = () => {
  const velocity = useSelector(selectModelingMeteoriteVelocity)

  return (
    <span style={{ fontFamily: 'Fira Code' }}>
      {metersToVelocityString(velocity)}
    </span>
  )
}
