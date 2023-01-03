import { timeToString } from '@utils'
import { useSelector } from 'react-redux'
import { selectCollisionTime } from '@selectors'

export const CollisionTime = () => {
  const time = useSelector(selectCollisionTime)

  return <span style={{ fontFamily: 'Fira Code' }}>{timeToString(time)}</span>
}
