import { Depth, LayerMaterial } from 'lamina'
import * as THREE from 'three'
import { angleToPI } from 'utils'
import { EARTH_NIGHT_MODEL_RADIUS } from './EarthNight'

export const SunLightStroke = () => {
  const near = 1
  const far = 1.03
  const color = '#8bb6e1'
  const scale = EARTH_NIGHT_MODEL_RADIUS

  return (
    <mesh rotation={[angleToPI(-90), 0, 0]}>
      <circleGeometry args={[far * scale + scale, 100]} />
      <LayerMaterial
        transparent
        depthWrite={false}
        blending={THREE.CustomBlending}
        blendEquation={THREE.AddEquation}
        blendSrc={THREE.SrcAlphaFactor}
        blendDst={THREE.DstAlphaFactor}
      >
        <Depth
          colorA={color}
          colorB='black'
          alpha={1}
          mode='normal'
          near={near * scale}
          far={far * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB='black'
          alpha={0.5}
          mode='add'
          near={-40 * scale}
          far={far * 1.2 * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB='black'
          alpha={1}
          mode='add'
          near={-15 * scale}
          far={far * 0.7 * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB='black'
          alpha={1}
          mode='add'
          near={-10 * scale}
          far={far * 0.68 * scale}
          origin={[0, 0, 0]}
        />
      </LayerMaterial>
    </mesh>
  )
}
