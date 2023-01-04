import { useDispatch } from '@hooks'
import { errorSnackbar } from '@utils'
import { useSnackbar } from 'notistack'
import { startModeling } from '@slices'
import { useSelector } from 'react-redux'
import { PlayArrowOutlined } from '@mui/icons-material'
import { Container, Tooltip, Button } from '@mui/material'
import {
  selectCanMeteoriteCollide,
  selectInvalidUserInputCount,
} from '@selectors'

/** Кнопка запуска моделирования */
export const StartModelingButton = () => {
  const dispatch = useDispatch()

  const canMeteoriteCollide = useSelector(selectCanMeteoriteCollide)
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

  const color = invalidUserInputCount
    ? 'error'
    : !canMeteoriteCollide
    ? 'warning'
    : 'primary'

  return (
    <Tooltip title='Начать моделирование'>
      <Container disableGutters>
        <Button
          fullWidth
          color={color}
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
