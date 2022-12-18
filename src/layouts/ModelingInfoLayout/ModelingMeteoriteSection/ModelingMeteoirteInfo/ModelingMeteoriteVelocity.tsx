import { useSelector } from 'react-redux'
import { selectModelingMeteoriteVelocity } from 'selectors'

export const ModelingMeteoriteVelocity = () => {
  const velocity = useSelector(selectModelingMeteoriteVelocity)

  return <>{velocity}</>
}
