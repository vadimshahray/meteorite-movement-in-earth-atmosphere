import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { MouseOutlined } from '@mui/icons-material'
import { setIsControlsDialogVisible } from 'slices'
import { selectIsControlsDialogVisible } from 'selectors'
import {
  Button,
  Dialog,
  Tooltip,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material'

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
          интерактивного контроллера помечены{' '}
          <Tooltip title='**Текст инструкции по применению интерактивного контроллера**'>
            <MouseOutlined fontSize='small' />
          </Tooltip>{' '}
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
