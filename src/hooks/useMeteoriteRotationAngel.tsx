import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVector } from 'selectors'
import { getAngelBetweenTwoVectors } from 'utils'

export const useMeteoriteRotationAngel = () => {
  const velocityVector = useSelector(selectMeteoriteVelocityVector)

  return getAngelBetweenTwoVectors(velocityVector, { x: 1, y: 0 })
}
