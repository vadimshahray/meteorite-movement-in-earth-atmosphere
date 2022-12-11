import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export const EarthLight = (props: MeshProps) => {
  const { nodes, materials } = useGLTF(
    '/models/earth/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <mesh
      {...props}
      geometry={nodes.Sphere_Material002_0.geometry}
      material={materials['Material.002']}
      dispose={null}
      rotation={[-Math.PI / 3, -Math.PI / 6, Math.PI]}
    />
  )
}

useGLTF.preload('/models/earth/scene.gltf')
