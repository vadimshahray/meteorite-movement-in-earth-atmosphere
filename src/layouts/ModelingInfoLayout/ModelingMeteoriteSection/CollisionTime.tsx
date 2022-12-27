import { useSelector } from 'react-redux'
import { selectCollisionTime } from 'selectors'
import { timerToString } from 'utils'

export const CollisionTime = () => {
  const time = useSelector(selectCollisionTime)

  return <>{timerToString(time)}</>
}
