import { Box, Typography } from '@mui/material'
import { Container } from 'components'
import { CameraToggler } from './CameraToggler'

export const CameraSettings = () => {
  return (
    <Container disableGuttersH>
      <Typography variant='subtitle1'>Камера</Typography>

      {/*@ts-ignore*/}
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='subtitle2'>Положение камеры</Typography>
        <CameraToggler />
      </Box>
    </Container>
  )
}
