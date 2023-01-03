import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { cancelModeling } from 'slices'
import { selectModelingStatus } from 'selectors'
import { CloseOutlined } from '@mui/icons-material'
import { Button, Container, Tooltip } from '@mui/material'

export const CancelModelingButton = () => {
  const dispatch = useDispatch()

  const modelingStatus = useSelector(selectModelingStatus)

  const handleClick = () => {
    dispatch(cancelModeling())
  }

  return (
    <Tooltip title='Вернуться к настройкам'>
      <Container disableGutters>
        <Button
          variant={modelingStatus === 'finished' ? 'contained' : 'text'}
          onClick={handleClick}
          startIcon={<CloseOutlined />}
        >
          Сброс
        </Button>
      </Container>
    </Tooltip>
  )
}
