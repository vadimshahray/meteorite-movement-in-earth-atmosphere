import { useThree } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import { Earth, Meteorite } from '../Models'

export const ModelingScene = () => {
  const isModeling = useSelector(selectIsModeling)

  useThree(({ camera }) => {
    if (isModeling) {
      camera.position.set(-20, 0, 0)
      camera.rotation.set(0, -Math.PI / 2, 0)
    } else {
      camera.rotation.set(0, 0, 0)
      camera.position.set(-2, 0, 5)
    }
  })

  return (
    <>
      <Meteorite isPresentationMode />
      <Earth />
    </>
  )
}
