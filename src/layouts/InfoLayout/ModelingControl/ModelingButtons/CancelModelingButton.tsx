import { CloseOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useDispatch } from 'hooks'
import { cancelModeling } from 'slices'

export const CancelModelingButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(cancelModeling())
  }

  return (
    <Button
      variant='contained'
      onClick={handleClick}
      startIcon={<CloseOutlined />}
    >
      Сброс
    </Button>
  )
}
