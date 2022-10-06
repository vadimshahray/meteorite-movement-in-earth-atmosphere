import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Button } from 'components'

/** Кнопка запуска моделирования */
export const LaunchButton = () => {
  return (
    <Button variant='contained' startIcon={<PlayArrowIcon />}>
      {'Моделировать'}
    </Button>
  )
}
