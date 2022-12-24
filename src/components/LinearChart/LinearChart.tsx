import { Typography, useTheme } from '@mui/material'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartTooltip } from './ChartTooltip'

export type LinearChartProps = {
  points: ChartPoint[]
  label: string
  xName?: string
  yName?: string
  separator?: string
}

export const LinearChart = ({
  points,
  label,
  xName = 'x',
  yName = 'y',
  separator = '=',
}: LinearChartProps) => {
  const { palette, typography } = useTheme()

  return (
    <>
      <Typography variant='caption'>{label}</Typography>

      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          data={points}
          margin={{ top: 10, right: 4, left: -32, bottom: 5 }}
        >
          <YAxis
            dataKey='y'
            stroke={palette.text.secondary}
            fontSize={typography.caption.fontSize}
          />

          <XAxis
            dataKey='x'
            interval={'preserveStartEnd'}
            stroke={palette.text.secondary}
            fontSize={typography.caption.fontSize}
          />

          <Line
            type='monotone'
            dataKey='y'
            dot={false}
            stroke={palette.primary.main}
          />

          <Tooltip
            content={<ChartTooltip />}
            formatter={(value, name) => {
              if (name === 'x') {
                return `${xName} ${separator} ${value}`
              } else if (name === 'y') {
                return `${yName} ${separator} ${value}`
              }

              return 'Unknown data name'
            }}
          />

          <CartesianGrid strokeDasharray='1 3' />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
