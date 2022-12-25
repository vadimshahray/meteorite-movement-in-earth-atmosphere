import { useSelector } from 'react-redux'
import { selectModelingMeteoriteXOffset } from 'selectors'
import { metersToDistanceString } from 'utils'

export const ModelingMeteoriteXOffset = () => {
  const xOffset = useSelector(selectModelingMeteoriteXOffset)

  return <>{metersToDistanceString(xOffset)}</>
}
