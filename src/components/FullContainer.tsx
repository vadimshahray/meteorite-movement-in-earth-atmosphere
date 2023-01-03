import { Container, ContainerProps } from '@components'

/**
 * Базовый контейнер на всю ширину
 * @param {ContainerProps}
 * @returns {JSX.Element}
 */
export const FullContainer = ({ sx, ...props }: ContainerProps) => {
  return (
    <Container
      {...props}
      maxWidth='xl'
      disableGutters
      sx={{
        height: '100%',
        overflow: 'hidden',
        ...sx,
      }}
    />
  )
}
