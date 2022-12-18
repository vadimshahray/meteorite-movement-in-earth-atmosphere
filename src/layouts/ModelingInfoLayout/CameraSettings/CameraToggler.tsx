import { Toggler } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectActiveCamera } from 'selectors'
import { setActiveCamera } from 'slices'
import { sceneCameras } from 'utils'

export const CameraToggler = () => {
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
