import PublicIcon from '@mui/icons-material/Public'
import { IconButton } from '@mui/material'
import { useDialog } from 'hooks'
import { PickPlanetModelDataDialog } from './PickPlanetModelDataDialog'

export const PickPlanetModelDataButton = () => {
  const { show, close } = useDialog()

  const handleClick = () => {
    show(<PickPlanetModelDataDialog onClose={close} />)
  }

  return (
    <IconButton onClick={handleClick}>
      <PublicIcon />
    </IconButton>
  )
}
