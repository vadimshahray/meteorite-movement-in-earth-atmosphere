import { useSelector } from 'react-redux'
import { selectModelingMeteoriteLocalSkylineAngle } from '@selectors'

export const ModelingMeteoriteEntryAngle = () => {
  const localSkylineAngle = useSelector(
    selectModelingMeteoriteLocalSkylineAngle,
  )

  const entryAngle = 180 - 90 + localSkylineAngle

  return (
    <span style={{ fontFamily: 'Fira Code, monospace' }}>
      {entryAngle.toFixed(3)}
    </span>
  )
}
