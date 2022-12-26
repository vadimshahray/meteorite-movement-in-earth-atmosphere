import { EARTH } from 'consts'
import { useBaseChartElementsProps } from 'hooks'
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
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
  const exosphere_gradient = 'exosphere_layer_gradient'
  const thermosphere_gradient = 'thermosphere_layer_gradient'
  const mesosphere_gradient = 'mesosphere_layer_gradient'
  const stratosphere_gradient = 'stratosphere_layer_gradient'
  const troposphere_gradient = 'troposphere_layer_gradient'

  const pointsWithAtmosphere = getPointsWithAtmosphereLayers(points)

  const {
    chartBaseProps,
    yAxisBaseProps,
    xAxisBaseProps,
    lineBaseProps,
    cartesianGridBaseProps,
  } = useBaseChartElementsProps()

  const linearGradientBaseProps = {
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '1',
  }

  const stopTopBaseProps = {
    offset: '0%',
    stopOpacity: 1,
  }
  const stopBottomBaseProps = {
    offset: '100%',
    stopOpacity: 0,
  }

  const areaCommonProps = {
    type: 'monotone' as 'monotone' | 'basis',
    fillOpacity: 1,
  }

  return (
    <ChartContainer label={label}>
      <ComposedChart data={pointsWithAtmosphere} {...chartBaseProps}>
        <YAxis {...yAxisBaseProps} />

        <XAxis {...xAxisBaseProps} />

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

        <defs>
          <linearGradient id={exosphere_gradient} {...linearGradientBaseProps}>
            <stop stopColor='#1450be' {...stopTopBaseProps} />
            <stop stopColor='#1450be' {...stopBottomBaseProps} />
          </linearGradient>

          <linearGradient
            id={thermosphere_gradient}
            {...linearGradientBaseProps}
          >
            <stop stopColor='#4a87ff' {...stopTopBaseProps} />
            <stop stopColor='#4a87ff' {...stopBottomBaseProps} />
          </linearGradient>

          <linearGradient id={mesosphere_gradient} {...linearGradientBaseProps}>
            <stop stopColor='#00c1f2' {...stopTopBaseProps} />
            <stop stopColor='#00c1f2' {...stopBottomBaseProps} />
          </linearGradient>

          <linearGradient
            id={stratosphere_gradient}
            {...linearGradientBaseProps}
          >
            <stop stopColor='#69d7f8' {...stopTopBaseProps} />
            <stop stopColor='#69d7f8' {...stopBottomBaseProps} />
          </linearGradient>

          <linearGradient
            id={troposphere_gradient}
            {...linearGradientBaseProps}
          >
            <stop stopColor='#98e5f9' {...stopTopBaseProps} />
            <stop stopColor='#98e5f9' {...stopBottomBaseProps} />
          </linearGradient>
        </defs>

        <Area
          dataKey='exosphere'
          fill={`url(#${exosphere_gradient})`}
          stroke='#1450be'
          {...areaCommonProps}
        />
        <Area
          dataKey='thermosphere'
          fill={`url(#${thermosphere_gradient})`}
          stroke='#4a87ff'
          {...areaCommonProps}
        />
        <Area
          dataKey='mesosphere'
          fill={`url(#${mesosphere_gradient})`}
          stroke='#00c1f2'
          {...areaCommonProps}
        />
        <Area
          dataKey='stratosphere'
          fill={`url(#${stratosphere_gradient})`}
          stroke='#69d7f8'
          {...areaCommonProps}
        />
        <Area
          dataKey='troposphere'
          fill={`url(#${troposphere_gradient})`}
          stroke='#98e5f9'
          {...areaCommonProps}
        />

        <Line {...lineBaseProps} />
      </ComposedChart>
    </ChartContainer>
  )
}

function getPointsWithAtmosphereLayers(points: ChartPoint[]) {
  if (points.length < 2) return points

  const minPoint = {
    x: points[0].x,
    fakeY: points[0].y,
  }

  const maxPoint = {
    x: points[points.length - 1].x,
    fakeY: points[points.length - 1].y,
  }

  return [
    {
      ...minPoint,
      exosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.EXOSPHERE,
    },
    {
      ...maxPoint,
      exosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.EXOSPHERE,
    },
    {
      ...minPoint,
      thermosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.THERMOSPHERE,
    },
    {
      ...maxPoint,
      thermosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.THERMOSPHERE,
    },
    {
      ...minPoint,
      mesosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.MESOSPHERE,
    },
    {
      ...maxPoint,
      mesosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.MESOSPHERE,
    },
    {
      ...minPoint,
      stratosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.STRATOSPHERE,
    },
    {
      ...maxPoint,
      stratosphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.STRATOSPHERE,
    },
    {
      ...minPoint,
      troposphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.TROPOSPHERE,
    },
    {
      ...maxPoint,
      troposphere: EARTH.ATMOSPHERE_LAYERS_HEIGHTS.TROPOSPHERE,
    },
    ...points,
  ]
}
