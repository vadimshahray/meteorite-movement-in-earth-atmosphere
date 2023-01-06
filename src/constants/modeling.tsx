import { EARTH } from '@constants'

export const CALCULATION_INTERVAL_MS = 33

/** Шаг работы физической формулы движения метеорита */
export const h = CALCULATION_INTERVAL_MS / 1000
export const g0 = EARTH.g
export const Rp = EARTH.RADIUS

export const CHART_LAST_POINTS_AMOUNT = 100
export const CHART_TOTAL_POINTS_AMOUNT = 1000
