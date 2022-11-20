import ViewInArIcon from '@mui/icons-material/ViewInAr'
import { IconButton } from '@mui/material'
import { useDialog } from 'hooks'
import { PhysicalModelsListDialog } from './PhysicalModelsListDialog'

export const PickPhysicalObjectModelButton = () => {
  const { show, close } = useDialog()

  const handleClick = () => {
    show(<PhysicalModelsListDialog onClose={close} />)
  }

  return (
    <IconButton key='PhysicalModelsListDialog' onClick={handleClick}>
      <ViewInArIcon />
    </IconButton>
  )
}
