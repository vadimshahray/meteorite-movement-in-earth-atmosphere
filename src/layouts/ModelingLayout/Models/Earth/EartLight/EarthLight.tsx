import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
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

const EarthLightModel = (props: MeshProps) => {
  const { nodes, materials } = useGLTF(
    '/models/earth/light/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <mesh
      {...props}
      geometry={nodes.Sphere_Material002_0.geometry}
      material={materials['Material.002']}
      dispose={null}
      rotation={[angleToPI(-90), angleToPI(-25), angleToPI(100)]}
    />
  )
}

useGLTF.preload('/models/earth/light/scene.gltf')

export const EarthLight = ({ visible, ...props }: MeshProps) => {
  return (
    <group visible={visible}>
      <EarthLightModel {...props} />
      <Atmosphere />
    </group>
  )
}
