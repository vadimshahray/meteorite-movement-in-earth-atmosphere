import { useSelector } from 'react-redux'
import { getAngleBetweenTwoVectors } from '@utils'
import { selectMeteoriteVelocityVector } from '@selectors'

export const useMeteoriteRotationAngle = () => {
  const velocityVector = useSelector(selectMeteoriteVelocityVector)

  return getAngleBetweenTwoVectors(velocityVector, { x: 1, y: 0 })
}
