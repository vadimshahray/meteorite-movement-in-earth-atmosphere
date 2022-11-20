import { useSpring, animated, config } from '@react-spring/three'
import { PresentationControls } from '@react-three/drei'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlanetRValue } from 'selectors'

export const Planet = React.memo(
  () => {
    const R = useSelector(selectPlanetRValue)

    const { scale } = useSpring({ scale: R, config: config.stiff })

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
  },
  () => true,
)
