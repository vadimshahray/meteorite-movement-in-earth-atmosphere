import { PropsWithChildren } from 'react'
import { Container } from './Container'

export const NumberFieldGroup = ({ children }: PropsWithChildren) => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 60px',
        columnGap: 1,
      }}
    >
      {children}
    </Container>
  )
}
