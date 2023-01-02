import { LayerMaterial, Gradient } from 'lamina'
import { EARTH_LIGHT_MODEL_RADIUS } from './EarthLight'

export const Atmosphere = () => {
  return (
    <mesh>
      <sphereGeometry
        args={[
          EARTH_LIGHT_MODEL_RADIUS + EARTH_LIGHT_MODEL_RADIUS * 0.0188,
          1000,
          1000,
        ]}
      />

      <LayerMaterial alpha={0.3} transparent>
        <Gradient colorA='#318ce7' colorB='#a3cefa' start={100} end={-100} />
      </LayerMaterial>
    </mesh>
  )
}
