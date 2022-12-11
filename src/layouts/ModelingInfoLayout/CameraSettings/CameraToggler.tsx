import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectActiveCamera } from 'selectors'
import { setActiveCamera } from 'slices'
import { sceneCameras } from 'utils'

export const CameraToggler = () => {
  const dispatch = useDispatch()
  const sceneActiveCamera = useSelector(selectActiveCamera)

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    activeCamera: string,
  ) => {
    dispatch(setActiveCamera(activeCamera as SceneCameras))
  }

  return (
    <ToggleButtonGroup
      exclusive
      size='small'
      value={sceneActiveCamera}
      onChange={handleChange}
    >
      {sceneCameras.map((c) => (
        <ToggleButton value={c.key} key={c.key}>
          {c.name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
