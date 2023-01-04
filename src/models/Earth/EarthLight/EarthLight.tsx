import React from 'react'
import * as THREE from 'three'
import { degreesToRadians } from '@utils'
import { GLTF } from 'three-stdlib'
import { Atmosphere } from './Atmosphere'
import { useGLTF } from '@react-three/drei'
import { EARTH_LIGHT_RADIUS_SCALE } from '@constants'
import { GroupProps, MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

const EarthLightModel = React.memo((props: MeshProps) => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + '/models/earth/light/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <mesh
      geometry={nodes.Sphere_Material002_0.geometry}
      material={materials['Material.002']}
      dispose={null}
      rotation={[
        degreesToRadians(-90),
        degreesToRadians(-25),
        degreesToRadians(100),
      ]}
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
