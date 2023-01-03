import { Content } from './Content'
import { ToolbarProvider } from 'providers'
import { ModelingControl } from './ModelingControl'
import { Container, FullContainer } from 'components'

export const InfoLayout = () => {
  return (
    <FullContainer sx={{ display: 'flex', flexDirection: 'column' }}>
      <ToolbarProvider>
        <Container
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflow: 'hidden',
          }}
        >
          <Content />

          <ModelingControl />
        </Container>
      </ToolbarProvider>
    </FullContainer>
  )
}
