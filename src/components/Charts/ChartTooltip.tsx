import { TooltipProps } from 'recharts'
import { Divider, Paper, Stack, Typography } from '@mui/material'

export const ChartTooltip = ({
  active,
  payload,
  formatter,
}: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null

  const point = payload[0].payload as ChartPoint

  const xData = formatter?.(point.x, 'x', payload[0], 0, payload) as [
    number,
    string,
  ]

  const yData = formatter?.(point.y, 'y', payload[0], 0, payload) as [
    number,
    string,
  ]

  return (
    <Paper>
      <Stack>
        <Typography textAlign='center' variant='subtitle2' sx={{ padding: 1 }}>
          {yData[1]}{' '}
          <span style={{ fontFamily: 'Fira Code, monospace' }}>{yData[0]}</span>
        </Typography>

        <Divider />

        <Typography
          textAlign='right'
          variant='caption'
          sx={{ padding: 1, paddingTop: 0.5, paddingBottom: 0.5 }}
        >
          {xData[1]}{' '}
          <span style={{ fontFamily: 'Fira Code, monospace' }}>{xData[0]}</span>
        </Typography>
      </Stack>
    </Paper>
  )
}
