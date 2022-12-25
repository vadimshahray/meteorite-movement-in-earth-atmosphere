import { useTheme } from '@mui/material'
import {
  CartesianGrid,
  Line,
  LineChart as RCLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartContainer } from '../ChartContainer'
import { ChartTooltip } from '../ChartTooltip'

export type LineChartProps = {
  points: ChartPoint[]
  label: string
  type?: 'number' | 'category'
  xName?: string
  yName?: string
  separator?: string
  xFormatter?: (value: number | string | Object) => string
  yFormatter?: (value: number | string | Object) => string
}

export const LineChart = ({
  points,
  label,
  type = 'category',
  xName = ':',
  yName = 'y',
  separator = ':',
  xFormatter = (_) => _.toString(),
  yFormatter = (_) => _.toString(),
}: LineChartProps) => {
  const { palette, typography } = useTheme()

  return (
    <ChartContainer label={label}>
      <RCLineChart
        data={points}
        margin={{ top: 10, right: 4, left: -32, bottom: 5 }}
      >
        <YAxis
          type={type}
          dataKey='y'
          stroke={palette.text.secondary}
          fontSize={typography.caption.fontSize}
        />

        <XAxis
          type={type}
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
          formatter={(value: any, name: any) => {
            if (name === 'x') {
              return [xFormatter(value.valueOf()), `${xName}${separator}`]
            } else if (name === 'y') {
              return [yFormatter(value.valueOf()), `${yName}${separator}`]
            }

            return 'Unknown data name'
          }}
        />

        <CartesianGrid strokeDasharray='1 3' />
      </RCLineChart>
    </ChartContainer>
  )
}
