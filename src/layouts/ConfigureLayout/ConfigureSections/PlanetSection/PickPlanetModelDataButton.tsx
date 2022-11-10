import PublicIcon from '@mui/icons-material/Public'
import { IconButton } from '@mui/material'
import { useDialog } from 'hooks'
import { PlanetModelsListDialog } from './PlanetModelsListDialog'

export const PickPlanetModelDataButton = () => {
  const { show, close } = useDialog()

  const handleClick = () => {
    show(<PlanetModelsListDialog onClose={close} />)
  }

  return (
    <IconButton onClick={handleClick}>
      <PublicIcon />
    </IconButton>
  )
}
