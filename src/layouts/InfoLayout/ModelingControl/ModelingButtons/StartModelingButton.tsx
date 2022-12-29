import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import { Container, Tooltip } from '@mui/material'
import { Button } from 'components'
import { useDispatch } from 'hooks'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectInvalidUserInputCount } from 'selectors'
import { startModeling } from 'slices'
import { errorSnackbar } from 'utils'

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
          startIcon={<PlayArrowOutlinedIcon />}
          onClick={handleClick}
        >
          Запуск
        </Button>
      </Container>
    </Tooltip>
  )
}
