import { useSelector } from 'react-redux'
import { getAngelBetweenTwoVectors } from 'utils'
import { selectMeteoriteVelocityVector } from 'selectors'

export const useMeteoriteRotationAngel = () => {
  const velocityVector = useSelector(selectMeteoriteVelocityVector)

  return getAngelBetweenTwoVectors(velocityVector, { x: 1, y: 0 })
}
