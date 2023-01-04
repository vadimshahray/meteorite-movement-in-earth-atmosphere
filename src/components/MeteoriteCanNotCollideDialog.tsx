import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { selectIsMeteoriteCanNotCollideDialogVisible } from '@selectors'
import {
  startModeling,
  setIsMeteoriteCanNotCollideDialogVisible,
} from '@slices'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material'

export const MeteoriteCanNotCollideDialog = () => {
  const dispatch = useDispatch()

  const isDialogVisible = useSelector(
    selectIsMeteoriteCanNotCollideDialogVisible,
  )

  const handleClose = () => {
    dispatch(setIsMeteoriteCanNotCollideDialogVisible(false))
    dispatch(startModeling(true))
  }

  const handleCancel = () => {
    dispatch(setIsMeteoriteCanNotCollideDialogVisible(false))
  }

  return (
    <Dialog open={isDialogVisible} onClose={handleClose}>
      <DialogTitle>Метеорит не столкнется с Землей</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Метеорит не столкнется с Землей. Все равно продолжить моделирование?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Отменить</Button>

        <Button onClick={handleClose}>Продолжить</Button>
      </DialogActions>
    </Dialog>
  )
}
