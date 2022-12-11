import VideocamIcon from '@mui/icons-material/Videocam'
import { Box, Typography } from '@mui/material'
import { Section } from 'components'
import { CameraToggler } from './CameraToggler'

export const CameraSettings = () => {
  return (
    <Section title='Камера' Icon={VideocamIcon}>
      {/*@ts-ignore*/}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='subtitle2'>Положение камеры</Typography>
        <CameraToggler />
      </Box>
    </Section>
  )
}
