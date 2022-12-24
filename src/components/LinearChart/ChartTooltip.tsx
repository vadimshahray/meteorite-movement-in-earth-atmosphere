import { Paper, Stack, Typography } from '@mui/material'
import { TooltipProps } from 'recharts'

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
      <Stack direction='row'>
        <Stack>
          <Typography textAlign='right' variant='caption'>
            {yData[1]}
          </Typography>
          <Typography textAlign='right' variant='caption'>
            {xData[1]}
          </Typography>
        </Stack>

        <Stack>
          <Typography textAlign='right' variant='caption'>
            &nbsp;{yData[0]}
          </Typography>
          <Typography textAlign='right' variant='caption'>
            &nbsp;{xData[0]}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
