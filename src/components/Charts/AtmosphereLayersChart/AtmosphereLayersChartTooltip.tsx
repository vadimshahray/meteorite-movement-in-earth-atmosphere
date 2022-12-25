import { Divider, Paper, Stack, Typography } from '@mui/material'
import { EARTH } from 'consts'
import { TooltipProps } from 'recharts'

export const AtmosphereLayersChartTooltip = ({
  active,
  payload,
  formatter,
}: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null

  const point = payload[0].payload as ChartPoint

  const xData = formatter?.(point.x, 'x', payload[0], 0, payload) as [
    number,
    string,
  ]

  const yData = formatter?.(point.y, 'y', payload[0], 0, payload) as [
    number,
    string,
  ]

  return (
    <Paper>
      <Stack>
        <Typography
          textAlign='center'
          variant='caption'
          sx={{ padding: 1, paddingTop: 0.5, paddingBottom: 0 }}
        >
          {getAtmosphereLayerName(point.y)}
        </Typography>

        <Typography
          textAlign='center'
          variant='subtitle2'
          sx={{ padding: 1, paddingTop: 0 }}
        >{`${yData[1]} ${yData[0]}`}</Typography>

        <Divider />

        <Typography
          textAlign='right'
          variant='caption'
          sx={{ padding: 1, paddingTop: 0.5, paddingBottom: 0.5 }}
        >
          {`${xData[1]} ${xData[0]}`}
        </Typography>
      </Stack>
    </Paper>
  )
}

function getAtmosphereLayerName(meters: number) {
  if (meters <= EARTH.ATMOSPHERE_LAYERS_HEIGHTS.TROPOSPHERE) return 'Тропосфера'

  if (meters <= EARTH.ATMOSPHERE_LAYERS_HEIGHTS.STRATOSPHERE)
    return 'Стратосфера'

  if (meters <= EARTH.ATMOSPHERE_LAYERS_HEIGHTS.MESOSPHERE) return 'Мезосфера'

  if (meters <= EARTH.ATMOSPHERE_LAYERS_HEIGHTS.THERMOSPHERE)
    return 'Термосфера'

  if (meters <= EARTH.ATMOSPHERE_LAYERS_HEIGHTS.EXOSPHERE) return 'Экзосфера'

  return 'Открытый космос'
}
