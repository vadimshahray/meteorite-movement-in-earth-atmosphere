import { EARTH } from 'consts'
import { useAreaBaseProps, useBaseChartElementsProps } from 'hooks'
import { Area, AreaChart, ReferenceLine, XAxis, YAxis } from 'recharts'
import { ChartContainer } from '../ChartContainer'

export type AtmosphereLayersChartBackgroundProps = {
  maxY?: number
}

const transformCoefficient = 1000

export const AtmosphereLayersChartBackground = ({
  maxY,
}: AtmosphereLayersChartBackgroundProps) => {
  const exosphere_gradient = 'exosphere_layer_gradient'
  const thermosphere_gradient = 'thermosphere_layer_gradient'
  const mesosphere_gradient = 'mesosphere_layer_gradient'
  const stratosphere_gradient = 'stratosphere_layer_gradient'
  const troposphere_gradient = 'troposphere_layer_gradient'

  const { chartBaseProps } = useBaseChartElementsProps()

  const {
    areaCommonProps,
    linearGradientBaseProps,
    stopTopBaseProps,
    stopBottomBaseProps,
    referenceLineProps,
  } = useAreaBaseProps()

  const points = getAtmosphereLayersPoints(maxY ?? 0)

  const { xAxisBaseProps, yAxisBaseProps } = useBaseChartElementsProps()

  return (
    <ChartContainer label='&nbsp;'>
      <AreaChart
        data={points}
        {...chartBaseProps}
        margin={{ top: 0, left: 14, right: 4, bottom: 18 }}
      >
        <XAxis {...xAxisBaseProps} hide />
        <YAxis {...yAxisBaseProps} hide />

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
            <stop stopColor='#98e5f9' {...stopTopBaseProps} />
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

        <ReferenceLine
          y={EARTH.ATMOSPHERE_LAYERS_HEIGHTS.EXOSPHERE / transformCoefficient}
          label='Экзосфера'
          {...referenceLineProps}
        />
        <ReferenceLine
          y={
            EARTH.ATMOSPHERE_LAYERS_HEIGHTS.THERMOSPHERE / transformCoefficient
          }
          label='Термосфера'
          {...referenceLineProps}
        />
        <ReferenceLine
          y={EARTH.ATMOSPHERE_LAYERS_HEIGHTS.MESOSPHERE / transformCoefficient}
          label='Мезосфера'
          {...referenceLineProps}
        />
        <ReferenceLine
          y={
            EARTH.ATMOSPHERE_LAYERS_HEIGHTS.STRATOSPHERE / transformCoefficient
          }
          {...referenceLineProps}
        />
        <ReferenceLine
          y={EARTH.ATMOSPHERE_LAYERS_HEIGHTS.TROPOSPHERE / transformCoefficient}
          label='Тропосфера'
          {...referenceLineProps}
        />
      </AreaChart>
    </ChartContainer>
  )
}

function getAtmosphereLayersPoints(maxY: number) {
  return [
    {
      x: 0,
      y: maxY,
    },
    {
      x: 0,
      exosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.EXOSPHERE / transformCoefficient,
    },
    {
      x: 100,
      exosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.EXOSPHERE / transformCoefficient,
    },
    {
      x: 0,
      thermosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.THERMOSPHERE / transformCoefficient,
    },
    {
      x: 100,
      thermosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.THERMOSPHERE / transformCoefficient,
    },
    {
      x: 0,
      mesosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.MESOSPHERE / transformCoefficient,
    },
    {
      x: 100,
      mesosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.MESOSPHERE / transformCoefficient,
    },
    {
      x: 0,
      stratosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.STRATOSPHERE / transformCoefficient,
    },
    {
      x: 100,
      stratosphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.STRATOSPHERE / transformCoefficient,
    },
    {
      x: 0,
      troposphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.TROPOSPHERE / transformCoefficient,
    },
    {
      x: 100,
      troposphere:
        EARTH.ATMOSPHERE_LAYERS_HEIGHTS.TROPOSPHERE / transformCoefficient,
    },
  ]
}
