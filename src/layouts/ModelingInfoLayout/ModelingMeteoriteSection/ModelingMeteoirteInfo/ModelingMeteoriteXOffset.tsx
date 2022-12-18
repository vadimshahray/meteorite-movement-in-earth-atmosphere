import { useSelector } from 'react-redux'
import { selectModelingMeteoriteXOffset } from 'selectors'

export const ModelingMeteoriteXOffset = () => {
  const xOffset = useSelector(selectModelingMeteoriteXOffset)

  return <>{xOffset}</>
}
