import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import { IconButton } from '@mui/material'

/** Пропсы компонента RollbackButton */
export type RollbackButtonProps = {
  /** Обработчик нажатия */
  onClick(): void
}

/**
 * Кнопка-сброс введённых данных
 * @returns {JSX.Element}
 */
export const RollbackButton = ({ onClick }: RollbackButtonProps) => {
  return (
    <IconButton onClick={() => onClick()}>
      <CleaningServicesIcon />
    </IconButton>
  )
}
