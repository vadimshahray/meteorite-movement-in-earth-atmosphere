import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
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

export const EARTH_LIGHT_MODEL_RADIUS = 1.7353594410588759

const EarthLightModel = React.memo(
  (props: MeshProps) => {
    const { nodes, materials } = useGLTF(
      process.env.PUBLIC_URL + '/models/earth/light/scene.gltf',
    ) as unknown as GLTFResult

    return (
      <group rotation={[0, angleToPI(90), 0]}>
        <mesh
          {...props}
          geometry={nodes.Sphere_Material002_0.geometry}
          material={materials['Material.002']}
          dispose={null}
          rotation={[angleToPI(-90), angleToPI(-25), angleToPI(100)]}
        />
      </group>
    )
  },
  () => true,
)

export default React.memo(({ visible, ...props }: MeshProps) => {
  return (
    <group visible={visible}>
      <EarthLightModel {...props} />
      <Atmosphere />
    </group>
  )
})

useGLTF.preload('/models/earth/light/scene.gltf')
