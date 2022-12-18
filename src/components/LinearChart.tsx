import { useTheme } from '@mui/material'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export type ChartPointData = {
  x: number
  y: number
}

export type LinearChartProps = {
  data: ChartPointData[]
}

export const LinearChart = ({ data }: LinearChartProps) => {
  const { palette, typography } = useTheme()

  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 5, left: -25, bottom: 5 }}
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

        <Line type='monotone' dataKey='y' stroke={palette.primary.main} />

        <CartesianGrid strokeDasharray='1 3' />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}