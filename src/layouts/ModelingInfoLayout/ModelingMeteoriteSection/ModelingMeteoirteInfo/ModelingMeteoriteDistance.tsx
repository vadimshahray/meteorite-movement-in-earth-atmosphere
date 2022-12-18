import { useSelector } from 'react-redux'
import { selectModelingMeteoriteDistance } from 'selectors'

export const ModelingMeteoriteDistance = () => {
  const distance = useSelector(selectModelingMeteoriteDistance)

  return <>{distance}</>
}
