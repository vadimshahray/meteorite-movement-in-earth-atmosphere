export const getVectorLength = (v: Vector2) => {
  return Math.sqrt(v.x ** 2 + v.y ** 2)
}

export const getAngelBetweenTwoVectors = (
  a: Vector2,
  b: Vector2,
  full: boolean = true,
) => {
  if ((!a.x && !a.y) || (!b.x && !b.y)) return 0

  const mult = a.x * b.x + a.y * b.y

  const aLength = getVectorLength(a)
  const bLength = getVectorLength(b)

  const cosValue = mult / (aLength * bLength)

  return full && (a.y < 0 || b.y < 0)
    ? Math.acos(cosValue) + Math.PI
    : Math.acos(cosValue)
}

export const getVectorFromAngelAndVector = (
  angle: number,
  v: Vector2,
): Vector2 => {
  return {
    x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
    y: v.x * Math.sin(angle) + v.y * Math.cos(angle),
  }
}

export const ratioVector = (v: Vector2): Vector2 => {
  const vLength = getVectorLength(v)

  return {
    x: v.x / vLength,
    y: v.y / vLength,
  }
}
