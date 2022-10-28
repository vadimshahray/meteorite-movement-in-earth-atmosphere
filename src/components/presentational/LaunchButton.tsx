import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Button } from 'components'

export type LaunchButtonProps = {
  onClick: () => unknown
}

/** Кнопка запуска моделирования */
export const LaunchButton = ({ onClick }: LaunchButtonProps) => {
  return (
    <Button variant='contained' startIcon={<PlayArrowIcon />} onClick={onClick}>
      Моделировать
    </Button>
  )
}
