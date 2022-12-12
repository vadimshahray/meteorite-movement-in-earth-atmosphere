import { Sky } from '@react-three/drei'

export const DaySky = () => {
  return (
    <Sky
      distance={1000000}
      sunPosition={[10, 10, 10]}
      inclination={10}
      rayleigh={0.1}
    />
  )
}
