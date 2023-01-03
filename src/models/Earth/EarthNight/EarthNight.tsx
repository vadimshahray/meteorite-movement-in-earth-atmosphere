import React from 'react'
import * as THREE from 'three'
import { angleToPI } from '@utils'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { SunLightStroke } from './SunLightStroke'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { EARTH_NIGHT_RADIUS_SCALE } from '@constants'

type GLTFResult = GLTF & {
  nodes: {
    pSphere1_color_0: THREE.Mesh
  }
  materials: {
    color: THREE.MeshStandardMaterial
  }
}

const EarthNightModel = React.memo(
  (props: MeshProps) => {
    const { nodes, materials } = useGLTF(
      process.env.PUBLIC_URL + '/models/earth/night/scene.gltf',
    ) as unknown as GLTFResult

    return (
      <group rotation={[0, angleToPI(90), 0]}>
        <mesh
          {...props}
          geometry={nodes.pSphere1_color_0.geometry}
          material={materials.color}
          dispose={null}
          rotation={[angleToPI(76), angleToPI(-64), angleToPI(76)]}
        />
      </group>
    )
  },
  () => true,
)

export default React.memo(({ visible }: GroupProps) => {
  return (
    <group visible={visible}>
      <EarthNightModel scale={EARTH_NIGHT_RADIUS_SCALE} />
      <SunLightStroke />
    </group>
  )
})

useGLTF.preload('/models/earth/night/scene.gltf')
