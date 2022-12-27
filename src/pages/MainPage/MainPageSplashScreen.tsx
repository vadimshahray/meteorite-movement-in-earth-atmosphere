import { Backdrop, Paper, CircularProgress } from '@mui/material'
import Typography from '@mui/material/Typography'

export const MainPageSplashScreen = () => {
  return (
    <Backdrop open>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <CircularProgress sx={{ marginBottom: 1 }} />

        <Typography>Пожалуйста, подождите! Модели загружаются...</Typography>
      </Paper>
    </Backdrop>
  )
}
