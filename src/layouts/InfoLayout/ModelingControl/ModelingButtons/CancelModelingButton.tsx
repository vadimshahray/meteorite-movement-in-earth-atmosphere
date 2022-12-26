import { CloseOutlined } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import { useDispatch } from 'hooks'
import { cancelModeling } from 'slices'

export const CancelModelingButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(cancelModeling())
  }

  return (
    <Tooltip title='Вернуться к настройкам'>
      <Button
        variant='contained'
        onClick={handleClick}
        startIcon={<CloseOutlined />}
      >
        Сброс
      </Button>
    </Tooltip>
  )
}
