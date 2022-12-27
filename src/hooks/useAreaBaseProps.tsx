import { useTheme } from '@mui/material'

export const useAreaBaseProps = () => {
  const { palette } = useTheme()

  return {
    linearGradientBaseProps: {
      x1: '0',
      y1: '0',
      x2: '0',
      y2: '1',
    },
    stopTopBaseProps: {
      offset: '0%',
      stopOpacity: 1,
    },
    stopBottomBaseProps: {
      offset: '100%',
      stopOpacity: 0,
    },
    areaCommonProps: {
      type: 'monotone' as 'monotone' | 'basis',
      fillOpacity: 1,
    },
    referenceLineProps: {
      stroke: palette.text.primary,
      strokeDasharray: '1 4',
    },
  }
}
