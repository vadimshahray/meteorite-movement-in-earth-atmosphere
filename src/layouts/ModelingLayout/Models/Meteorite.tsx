import { Float, PresentationControls, useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectObjectModelR } from 'selectors'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { getRadiusNorm, scaleMeters } from 'utils'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']: THREE.MeshStandardMaterial
  }
}

const METEORITE_MODEL_RADIUS = 0.03429021680565431

const MeteoriteModel = React.memo<MeshProps>((props) => {
  const { nodes, materials } = useGLTF(
    '/models/meteorite/scene.gltf',
  ) as unknown as GLTFResult

  nodes.Object_2.geometry.center()

  return (
    <mesh
      dispose={null}
      geometry={nodes.Object_2.geometry}
      material={
        materials['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']
      }
      {...props}
    />
  )
})

export type MeteoriteProps = {
  isPresentationMode: boolean
}

export const Meteorite = React.memo<MeteoriteProps>(
  ({ isPresentationMode }) => {
    const radius = useSelector(selectObjectModelR)
    const scale = getRadiusNorm(METEORITE_MODEL_RADIUS) * scaleMeters(radius)

    return (
      <Float speed={isPresentationMode ? undefined : 0}>
        <PresentationControls
          enabled={isPresentationMode}
          snap
          speed={2}
          polar={[-Infinity, Infinity]}
          azimuth={[-Infinity, Infinity]}
          config={{ mass: 10, tension: 200, friction: 40 }}
        >
          <MeteoriteModel scale={scale} />
        </PresentationControls>
      </Float>
    )
  },
)
