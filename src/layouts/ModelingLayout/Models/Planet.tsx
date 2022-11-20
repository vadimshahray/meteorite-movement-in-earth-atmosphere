import { PresentationControls, Sphere } from '@react-three/drei'

export const Planet = () => {
  return (
    <PresentationControls
      snap
      speed={2}
      polar={[-Infinity, Infinity]}
      azimuth={[-Infinity, Infinity]}
      config={{ mass: 1, tension: 170, friction: 26 }}
    >
      <Sphere scale={12}>
        <meshBasicMaterial color='blue' />
      </Sphere>
    </PresentationControls>
  )
}
