export const useAreaBaseProps = () => {
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
  }
}
