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
  const atmosphereLayersGradient = 'atmosphere_layers_gradient'

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
          <linearGradient
            id={atmosphereLayersGradient}
            {...linearGradientBaseProps}
          >
            <stop stopColor='#1450be' {...stopTopBaseProps} />
            <stop stopColor='#98e5f9' {...stopBottomBaseProps} />
          </linearGradient>
        </defs>

        <Area
          dataKey='exosphere'
          fill={`url(#${atmosphereLayersGradient})`}
          stroke='#1450be'
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
