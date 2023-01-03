import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useMeteoritePosition, useMeteoriteRadius } from 'hooks'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']: THREE.MeshStandardMaterial
  }
}

const METEORITE_MODEL_RADIUS = 0.02029021680565431 - 0.00188
const METEORITE_MODEL_NORM_RADIUS_SCALE = 1.0 / METEORITE_MODEL_RADIUS

const MeteoriteModel = React.memo<MeshProps>((props) => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + '/models/meteorite/scene.gltf',
  ) as unknown as GLTFResult

  nodes.Object_2.geometry.center()

  return (
    <mesh
      dispose={null}
      geometry={nodes.Object_2.geometry}
      material={
        materials['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']
      }
      rotation={[0, 0, 45]}
      {...props}
    />
  )
})

export const Meteorite = React.memo(() => {
  const radius = useMeteoriteRadius()
  const position = useMeteoritePosition()

  return (
    <MeteoriteModel
      position={position}
      scale={radius * METEORITE_MODEL_NORM_RADIUS_SCALE}
    />
  )
})
