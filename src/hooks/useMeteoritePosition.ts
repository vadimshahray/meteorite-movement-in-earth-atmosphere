import { useSelector } from 'react-redux'
import { selectMeteoriteDistance } from 'selectors'
import * as THREE from 'three'
import { scaleMeters } from 'utils'
import { useEarthRadius } from './useEarthRadius'
import { useMeteoriteRadius } from './useMeteoirteRadius'

export const useMeteoritePosition = () => {
  const EarthRadius = useEarthRadius()
  const meteoriteRadius = useMeteoriteRadius()

  const distance = useSelector(selectMeteoriteDistance)

  return new THREE.Vector3(
    0,
    EarthRadius + meteoriteRadius.radius + scaleMeters(distance),
    0,
  )
}
