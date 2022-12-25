export const metersToDistance = (meters: number) => {
  return {
    km: Math.floor(meters / 1000),
    m: Math.floor(meters % 1000),
  }
}

export const metersToVelocityString = (meters: number) => {
  const { km, m } = metersToDistance(meters)

  if (km) {
    return `${km}.${m} км/c`
  }

  return `${m} м/c`
}

export const metersToDistanceString = (meters: number) => {
  const { km, m } = metersToDistance(meters)

  let str = ''

  km && (str += `${km}км`)
  m && (str += ` ${m}м`)

  return str === '' ? '0м' : str
}
