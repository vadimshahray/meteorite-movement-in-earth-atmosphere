import { useDispatch } from '@hooks'
import { startModeling } from '@slices'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { selectCanMeteoriteCollide } from '@selectors'
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
  const canMeteoriteCollide = useSelector(selectCanMeteoriteCollide)

  const [isOpen, setIsOpen] = useState(canMeteoriteCollide === true)

  useEffect(() => {
    setIsOpen(canMeteoriteCollide === false)
  }, [canMeteoriteCollide])

  const handleClose = () => {
    setIsOpen(false)
    dispatch(startModeling(true))
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
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
