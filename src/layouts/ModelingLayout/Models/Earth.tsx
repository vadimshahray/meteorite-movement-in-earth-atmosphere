/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
title: Earth
*/

import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { getRadiusNorm } from 'utils'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

const EARTH_MODEL_RADIUS = 1.7320494310588754

const EarthModel = (props: MeshProps) => {
  const { nodes, materials } = useGLTF(
    '/models/earth/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <mesh
      geometry={nodes.Sphere_Material002_0.geometry}
      material={materials['Material.002']}
      dispose={null}
      {...props}
      rotation={[-Math.PI / 3, -Math.PI / 6, Math.PI]}
    />
  )
}

export const Earth = React.memo(() => {
  const scale = EARTH_MODEL_RADIUS * getRadiusNorm(EARTH_MODEL_RADIUS)

  return <EarthModel scale={scale} />
})

useGLTF.preload('/models/earth/scene.gltf')
