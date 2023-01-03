import { ChartTooltip } from '../ChartTooltip'
import { useBaseChartElementsProps } from '@hooks'
import { ChartContainer } from '../ChartContainer'
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart as RCLineChart,
} from 'recharts'

export type LineChartProps = {
  points: ChartPoint[]
  label: string
  xName?: string
  yName?: string
  separator?: string
  xUnit?: string
  xFormatter?: (value: number | string | Object) => string
  yFormatter?: (value: number | string | Object) => string
}

export const LineChart = ({
  points,
  label,
  xName = ':',
  yName = 'y',
  separator = ':',
  xUnit,
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

        <XAxis {...xAxisBaseProps} unit={xUnit} />

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
