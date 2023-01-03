import { Button } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { Container, Tooltip } from '@mui/material'
import { restartModeling, stopModeling } from 'slices'
import { RestartAltOutlined, StopOutlined } from '@mui/icons-material'

export const StopModelingButton = () => {
  const dispatch = useDispatch()

  const modelingStatus = useSelector(selectModelingStatus)

  const handleClick = () => {
    if (modelingStatus === 'stopped') {
      dispatch(restartModeling())
    } else {
      dispatch(stopModeling())
    }
  }

  return (
    <Tooltip
      title={
        modelingStatus === 'stopped'
          ? 'Продолжить моделирование'
          : 'Остановить моделирование'
      }
    >
      <Container disableGutters>
        <Button
          variant='contained'
          startIcon={
            modelingStatus === 'stopped' ? (
              <RestartAltOutlined />
            ) : (
              <StopOutlined />
            )
          }
          onClick={handleClick}
        >
          {modelingStatus === 'stopped' ? 'Запуск' : 'Стоп'}
        </Button>
      </Container>
    </Tooltip>
  )
}
