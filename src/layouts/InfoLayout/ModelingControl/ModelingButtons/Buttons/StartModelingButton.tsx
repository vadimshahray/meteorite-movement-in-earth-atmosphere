import { useDispatch } from 'hooks'
import { errorSnackbar } from 'utils'
import { startModeling } from 'slices'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { PlayArrowOutlined } from '@mui/icons-material'
import { selectInvalidUserInputCount } from 'selectors'
import { Container, Tooltip, Button } from '@mui/material'

/** Кнопка запуска моделирования */
export const StartModelingButton = () => {
  const dispatch = useDispatch()
  const invalidUserInputCount = useSelector(selectInvalidUserInputCount)

  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    if (invalidUserInputCount === 0) {
      dispatch(startModeling())
      return
    }

    enqueueSnackbar(
      `Введенные данные содержат ошибки (${invalidUserInputCount}). Исправьте их!`,
      errorSnackbar('Невозможно начать моделирование!'),
    )
  }

  return (
    <Tooltip title='Начать моделирование'>
      <Container disableGutters>
        <Button
          fullWidth
          variant='contained'
          startIcon={<PlayArrowOutlined />}
          onClick={handleClick}
        >
          Запуск
        </Button>
      </Container>
    </Tooltip>
  )
}
