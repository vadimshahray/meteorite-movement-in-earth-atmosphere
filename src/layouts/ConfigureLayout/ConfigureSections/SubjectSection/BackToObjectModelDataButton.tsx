import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { IconButton } from '@mui/material'
import { useDispatch } from 'hooks'
import { setActiveObjectModelData } from 'slices'

export const BackToObjectModelDataButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setActiveObjectModelData())
  }

  return (
    <IconButton key='BackToModelDataButton' onClick={handleClick}>
      <RestartAltIcon />
    </IconButton>
  )
}
