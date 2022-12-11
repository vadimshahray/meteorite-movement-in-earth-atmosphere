import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { angleToPI } from 'utils'

type GLTFResult = GLTF & {
  nodes: {
    pSphere1_color_0: THREE.Mesh
  }
  materials: {
    color: THREE.MeshStandardMaterial
  }
}

export const EarthNight = (props: MeshProps) => {
  const { nodes, materials } = useGLTF(
    '/models/earth/night/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <mesh
      {...props}
      geometry={nodes.pSphere1_color_0.geometry}
      material={materials.color}
      dispose={null}
      rotation={[angleToPI(76), angleToPI(-64), angleToPI(76)]}
    />
  )
}

useGLTF.preload('/models/earth/night/scene.gltf')
