import {
  Container as MUIContainer,
  ContainerProps as MUIContainerProps,
} from '@mui/material'

export type ContainerProps = MUIContainerProps & {
  disableGuttersH?: boolean
  disableGuttersV?: boolean
}

/**
 * Базовый контейнер
 * @param {ContainerProps}
 * @returns {JSX.Element}
 */
export const Container = ({
  disableGuttersH = false,
  disableGuttersV = false,
  sx,
  ...props
}: ContainerProps) => {
  return (
    <MUIContainer
      sx={{
        paddingRight: disableGuttersH ? 0 : undefined,
        paddingLeft: disableGuttersH ? 0 : undefined,
        paddingTop: disableGuttersV ? 0 : undefined,
        paddingBottom: disableGuttersV ? 0 : undefined,
        ...sx,
      }}
      {...props}
    />
  )
}
