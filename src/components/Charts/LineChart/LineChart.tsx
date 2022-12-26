import { useTheme } from '@mui/material'
import { useBaseChartElementsProps } from 'hooks'
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
  xName?: string
  yName?: string
  separator?: string
  xFormatter?: (value: number | string | Object) => string
  yFormatter?: (value: number | string | Object) => string
}

export const LineChart = ({
  points,
  label,
  xName = ':',
  yName = 'y',
  separator = ':',
  xFormatter = (_) => _.toString(),
  yFormatter = (_) => _.toString(),
}: LineChartProps) => {
  const {
    chartBaseProps,
    yAxisBaseProps,
    xAxisBaseProps,
    lineBaseProps,
    cartesianGridBaseProps,
  } = useBaseChartElementsProps()

  return (
    <ChartContainer label={label}>
      <RCLineChart data={points} {...chartBaseProps}>
        <YAxis {...yAxisBaseProps} />

        <XAxis {...xAxisBaseProps} />

        <Line {...lineBaseProps} />

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

        <CartesianGrid {...cartesianGridBaseProps} />
      </RCLineChart>
    </ChartContainer>
  )
}
