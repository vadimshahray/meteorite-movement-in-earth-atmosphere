import { Paper, Typography } from '@mui/material'
import { TooltipProps } from 'recharts'

export const ChartTooltip = ({
  active,
  payload,
  formatter,
}: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null

  const point = payload[0].payload as ChartPoint

  return (
    <Paper>
      <Typography>
        {formatter?.(point.y, 'y', payload[0], 0, payload)}
      </Typography>

      <Typography>
        {formatter?.(point.x, 'x', payload[0], 0, payload)}
      </Typography>
    </Paper>
  )
}
