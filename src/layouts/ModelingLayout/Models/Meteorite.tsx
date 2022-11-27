import { animated, config, useSpring } from '@react-spring/three'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectObjectModelR } from 'selectors'

export const Meteorite = React.memo(
  () => {
    const R = useSelector(selectObjectModelR)

    const { scale } = useSpring({ scale: R, config: config.stiff })

    return (
      <>
        {/** @ts-ignore */}
        <animated.mesh scale={scale}>
          <sphereGeometry />
          <meshBasicMaterial color='pink' />
        </animated.mesh>
      </>
    )
  },
  () => true,
)
