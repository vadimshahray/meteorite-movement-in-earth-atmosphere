const RADIUS_NORM = 1.0

export const getRadiusNorm = (r: number) => {
  return RADIUS_NORM / r
}

const METER_SCALE = 0.00001

export const scaleMeters = (n: number) => {
  return n * METER_SCALE
}
