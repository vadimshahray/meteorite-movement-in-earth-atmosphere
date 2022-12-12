import { Sphere } from '@react-three/drei'
import { LayerMaterial, Gradient } from 'lamina'
import { EARTH_RADIUS } from '../Earth'

export const Atmosphere = () => {
  return (
    <mesh>
      <sphereGeometry
        args={[EARTH_RADIUS + EARTH_RADIUS * 0.017, 1000, 1000]}
      />

      <LayerMaterial alpha={0.3} transparent>
        <Gradient colorA='#318ce7' colorB='#a3cefa' start={100} end={-100} />
      </LayerMaterial>
    </mesh>
  )
}
