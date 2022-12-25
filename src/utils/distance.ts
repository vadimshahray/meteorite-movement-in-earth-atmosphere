export const metersToDistance = (meters: number) => {
  return {
    km: Math.floor(meters / 1000),
    m: meters % 1000,
  }
}

export const metersToVelocityString = (meters: number) => {
  const { km, m } = metersToDistance(meters)

  if (km) {
    return `${km.toFixed(0)}.${m.toFixed(0)} км/c`
  }

  return `${m.toFixed(1)} м/c`
}

export const metersToDistanceString = (meters: number) => {
  const { km, m } = metersToDistance(meters)

  let str = ''

  km && (str += `${km.toFixed(0)}км`)
  m && (str += ` ${m.toFixed(0)}м`)

  return str === '' ? '0м' : str
}
