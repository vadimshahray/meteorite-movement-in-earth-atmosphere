import { Container, FullContainer } from 'components'
import { ToolbarProvider } from 'providers'
import { Content } from './Content'
import { ModelingControl } from './ModelingControl'

export const InfoLayout = () => {
  return (
    <FullContainer sx={{ display: 'flex', flexDirection: 'column' }}>
      <ToolbarProvider>
        <Container
          disableGutters
          sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        >
          <Content />

          <ModelingControl />
        </Container>
      </ToolbarProvider>
    </FullContainer>
  )
}
