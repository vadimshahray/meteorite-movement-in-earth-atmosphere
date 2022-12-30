import { HelpOutline } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import { useDispatch } from 'hooks'
import { setIsControlsDialogVisible } from 'slices'

export const ShowControlsDialogButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIsControlsDialogVisible(true))
  }

  return (
    <Tooltip title='Показать информацию о доступных интерактивных контроллерах'>
      <span style={{ position: 'absolute', bottom: 12, left: 12 }}>
        <Button
          variant='contained'
          onClick={handleClick}
          startIcon={<HelpOutline fontSize='small' />}
        >
          Интерактивные контроллеры
        </Button>
      </span>
    </Tooltip>
  )
}
