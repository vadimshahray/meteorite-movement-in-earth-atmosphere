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
  xFormatter?: (value: number | string | Object) => string
  yFormatter?: (value: number | string | Object) => string
}

export const LinearChart = ({
  points,
  label,
  xName = ':',
  yName = 'y',
  separator = ':',
  xFormatter = (_) => _.toString(),
  yFormatter = (_) => _.toString(),
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
                return [xFormatter(value.valueOf()), `${xName}${separator}`]
              } else if (name === 'y') {
                return [yFormatter(value.valueOf()), `${yName}${separator}`]
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
