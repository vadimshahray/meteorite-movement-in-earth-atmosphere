import { useDispatch } from 'hooks'
import { Toggler } from 'components'
import { sceneCameras } from 'utils'
import { setActiveCamera } from 'slices'
import { useSelector } from 'react-redux'
import { selectActiveCamera } from 'selectors'

export const ActiveCameraToggler = () => {
  const dispatch = useDispatch()
  const sceneActiveCamera = useSelector(selectActiveCamera)

  const handleChange = (activeCamera: string) => {
    dispatch(setActiveCamera(activeCamera as SceneCameras))
  }

  return (
    <Toggler
      value={sceneActiveCamera}
      items={sceneCameras}
      onChange={handleChange}
    />
  )
}
