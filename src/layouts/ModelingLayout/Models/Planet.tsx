import { useSpring, animated, config } from '@react-spring/three'
import { PresentationControls } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'

export const Planet = () => {
  const R = useSelector(selectPlanetR)

  const { scale } = useSpring({ scale: R.value, config: config.stiff })

  return (
    <PresentationControls
      snap
      speed={2}
      polar={[-Infinity, Infinity]}
      azimuth={[-Infinity, Infinity]}
      config={{ mass: 1, tension: 170, friction: 26 }}
    >
      {/** @ts-ignore */}
      <animated.mesh scale={scale}>
        <sphereGeometry />
        <meshBasicMaterial color='blue' />
      </animated.mesh>
    </PresentationControls>
  )
}
