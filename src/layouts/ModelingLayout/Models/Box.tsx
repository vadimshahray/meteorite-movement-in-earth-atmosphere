import { PresentationControls, RoundedBox } from '@react-three/drei'

export const Box = () => {
  return (
    <mesh position={[-20, 0, 0]}>
      <PresentationControls
        snap
        speed={2}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <RoundedBox scale={1} />
      </PresentationControls>
    </mesh>
  )
}
