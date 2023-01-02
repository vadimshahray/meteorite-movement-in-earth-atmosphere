import { useGLTF } from '@react-three/drei'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { EARTH } from 'consts'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { angleToPI } from 'utils'
import { Atmosphere } from './Atmosphere'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

const EARTH_LIGHT_MODEL_RADIUS = 1.7353594410588759
const EARTH_LIGHT_MODEL_RADIUS_SCALE = 1.0 / EARTH_LIGHT_MODEL_RADIUS

export const EARTH_LIGHT_RADIUS_SCALE =
  EARTH_LIGHT_MODEL_RADIUS_SCALE * EARTH.RADIUS * 0.00001

const EarthLightModel = React.memo((props: MeshProps) => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + '/models/earth/light/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <mesh
      geometry={nodes.Sphere_Material002_0.geometry}
      material={materials['Material.002']}
      dispose={null}
      rotation={[angleToPI(-90), angleToPI(-25), angleToPI(100)]}
      {...props}
    />
  )
})

export default React.memo(({ visible }: GroupProps) => {
  return (
    <group visible={visible}>
      <EarthLightModel scale={EARTH_LIGHT_RADIUS_SCALE} />

      <Atmosphere />
    </group>
  )
})

useGLTF.preload('/models/earth/light/scene.gltf')
