import { useThree } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import { Earth, EARTH_RADIUS, Meteorite } from '../Models'

export const ModelingScene = () => {
  const isModeling = useSelector(selectIsModeling)

  useThree(({ camera }) => {
    camera.position.set(-2 * EARTH_RADIUS, 0, 0)
    camera.rotation.set(0, -Math.PI / 2, 0)
    // if (isModeling) {
    // } else {
    //   camera.rotation.set(0, 0, 0)
    //   camera.position.set(0, 0, 5)
    // }
  })

  return (
    <>
      <Meteorite isPresentationMode />
      <Earth />
    </>
  )
}
