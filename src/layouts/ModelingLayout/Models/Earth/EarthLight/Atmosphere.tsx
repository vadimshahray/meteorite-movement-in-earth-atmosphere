import { LayerMaterial, Gradient } from 'lamina'
import { EARTH_LIGHT_RADIUS_SCALE } from './EarthLight'

export const Atmosphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.0188 * EARTH_LIGHT_RADIUS_SCALE, 1000, 1000]} />

      <LayerMaterial alpha={0.3} transparent>
        <Gradient colorA='#318ce7' colorB='#a3cefa' start={100} end={-100} />
      </LayerMaterial>
    </mesh>
  )
}
