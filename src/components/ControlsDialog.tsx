import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectIsControlsDialogVisible } from 'selectors'
import { setIsControlsDialogVisible } from 'slices'

export const ControlsDialog = () => {
  const dispatch = useDispatch()

  const isDialogVisible = useSelector(selectIsControlsDialogVisible)

  const handleClose = () => {
    dispatch(setIsControlsDialogVisible(false))
  }

  return (
    <Dialog open={isDialogVisible} onClose={handleClose}>
      <DialogTitle>Интерактивные контроллеры: как ими пользоваться</DialogTitle>

      <DialogContent>
        <DialogContentText>Текст</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Понятно</Button>
      </DialogActions>
    </Dialog>
  )
}
