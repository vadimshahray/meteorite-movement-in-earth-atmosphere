import { RestartAltOutlined, StopOutlined } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { Button } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { restartModeling, stopModeling } from 'slices'

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
    </Tooltip>
  )
}
