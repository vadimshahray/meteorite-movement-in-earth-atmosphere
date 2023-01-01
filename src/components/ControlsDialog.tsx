import { MouseOutlined } from '@mui/icons-material'
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
      <DialogTitle>Об интерактивных контроллерах</DialogTitle>

      <DialogContent>
        <DialogContentText>
          <b>Интерактивные контроллеры</b> - это способ задать настройки
          приложения, используя вместо полей ввода данных клавиатуру или
          мышь/тачпад. Настройки, которые можно изменить при помощи
          интерактивного контроллера помечены <MouseOutlined fontSize='small' />{' '}
          иконкой. Чтобы узнать как воспользоваться интерактивным контроллером,
          достаточно навести курсор мыши на такую иконку, и вам покажется
          необходимая инструкция.
          <br /> <br />
          Интерактивные контроллеры тоже можно настраивать. Это можно сделать в
          секции, помеченной той же <MouseOutlined fontSize='small' /> иконкой.
          Таким образом вы сможете регулировать чувствительность контроллеров -
          значение, на которое они будут изменять определенную настройку
          приложения.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Понятно</Button>
      </DialogActions>
    </Dialog>
  )
}
