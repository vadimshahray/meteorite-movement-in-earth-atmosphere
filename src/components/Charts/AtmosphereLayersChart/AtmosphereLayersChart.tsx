import { Container } from 'components/Container'
import { useBaseChartElementsProps } from 'hooks'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { AtmosphereLayersChartBackground } from './AtmosphereLayersChartBackground'
import { AtmosphereLayersChartTooltip } from './AtmosphereLayersChartTooltip'
import { ChartContainer } from '../ChartContainer'

export type AtmosphereLayersChartProps = {
  points: ChartPoint[]
  label: string
  xName?: string
  yName?: string
  separator?: string
  xFormatter?: (value: number | string | Object) => string
  yFormatter?: (value: number | string | Object) => string
}

export const AtmosphereLayersChart = ({
  points,
  label,
  xName = ':',
  yName = 'y',
  separator = ':',
  xFormatter = (_) => _.toString(),
  yFormatter = (_) => _.toString(),
}: AtmosphereLayersChartProps) => {
  const {
    chartBaseProps,
    yAxisBaseProps,
    xAxisBaseProps,
    lineBaseProps,
    cartesianGridBaseProps,
  } = useBaseChartElementsProps()

  return (
    <Container disableGutters sx={{ position: 'relative' }}>
      <AtmosphereLayersChartBackground maxY={points[0]?.y} />

      <Container
        disableGutters
        sx={{
          position: 'absolute',
          zIndex: 100,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <ChartContainer label={label}>
          <LineChart data={points} {...chartBaseProps}>
            <YAxis {...yAxisBaseProps} />

            <XAxis {...xAxisBaseProps} />

            <Line {...lineBaseProps} />

            <Tooltip
              content={<AtmosphereLayersChartTooltip />}
              formatter={(value: any, name: any) => {
                if (name === 'x') {
                  return [xFormatter(value.valueOf()), `${xName}${separator}`]
                } else if ((name === 'y' && value) || name === 'fakeY') {
                  return [yFormatter(value.valueOf()), `${yName}${separator}`]
                }

                return 'Unknown data name'
              }}
            />

            <CartesianGrid {...cartesianGridBaseProps} />
          </LineChart>
        </ChartContainer>
      </Container>
    </Container>
  )
}
