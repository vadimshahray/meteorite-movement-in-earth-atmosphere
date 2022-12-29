import { Float, PresentationControls, useGLTF } from '@react-three/drei'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { useDispatch, useMeteoritePosition, useMeteoriteRadius } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { changeMeteoriteData } from 'slices'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']: THREE.MeshStandardMaterial
  }
}

export const METEORITE_MODEL_RADIUS = 0.03813021680565431
export const METEORITE_MODEL_NORM_RADIUS = 1.0 / METEORITE_MODEL_RADIUS

const MeteoriteModel = React.memo<MeshProps>((props) => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + '/models/meteorite/scene.gltf',
  ) as unknown as GLTFResult

  nodes.Object_2.geometry.center()

  return (
    <mesh
      dispose={null}
      geometry={nodes.Object_2.geometry}
      material={
        materials['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']
      }
      {...props}
    />
  )
})

export const Meteorite = React.memo(() => {
  const dispatch = useDispatch()

  const modelingStatus = useSelector(selectModelingStatus)

  const { scale, radius } = useMeteoriteRadius()
  const position = useMeteoritePosition()

  const onWheel = ({ deltaY }: ThreeEvent<WheelEvent>) => {
    dispatch(
      changeMeteoriteData({
        property: 'radius',
        value: Math.sign(deltaY) * 1000,
      }),
    )
  }

  return (
    <Float
      speed={modelingStatus === 'idle' ? undefined : 0}
      floatingRange={[0, radius * 0.1]}
      position={position}
      onWheel={onWheel}
    >
      <PresentationControls
        enabled={modelingStatus === 'idle'}
        snap
        speed={1}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 10, tension: 100, friction: 40 }}
      >
        <MeteoriteModel scale={scale} />
      </PresentationControls>
    </Float>
  )
})
