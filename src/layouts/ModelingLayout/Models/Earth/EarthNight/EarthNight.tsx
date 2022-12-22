import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { angleToPI } from 'utils'
import { SunLightStroke } from './SunLightStroke'

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

export const EarthNight = ({ visible, ...props }: MeshProps) => {
  return (
    <group visible={visible}>
      <EarthNightModel {...props} />
      <SunLightStroke />
    </group>
  )
}

useGLTF.preload('/models/earth/night/scene.gltf')
