/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
title: Earth
*/

import { Sphere, useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { EARTH } from 'consts'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectObjectModely0 } from 'selectors'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { getRadiusNorm, scaleMeters } from 'utils'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

const EARTH_MODEL_RADIUS = 1.7320494310588754

export const EARTH_RADIUS =
  getRadiusNorm(EARTH_MODEL_RADIUS) * scaleMeters(EARTH.RADIUS)

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
  const distance = scaleMeters(useSelector(selectObjectModely0))

  return (
    <group position={[EARTH_RADIUS + distance, 0, 0]}>
      <EarthModel scale={EARTH_RADIUS} />

      <Sphere scale={EARTH_RADIUS + 1}>
        <meshStandardMaterial color='#318ce7' opacity={0.19} transparent />
      </Sphere>
    </group>
  )
})

useGLTF.preload('/models/earth/scene.gltf')
