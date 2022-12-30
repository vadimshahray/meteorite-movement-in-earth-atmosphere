export const getAngelBetweenTwoVectors = (
  a: Vector2,
  b: Vector2,
  withSign: boolean = true,
) => {
  if ((!a.x && !a.y) || (!b.x && !b.y)) return 0

  const mult = a.x * b.x + a.y * b.y

  const aAbs = Math.sqrt(a.x ** 2 + a.y ** 2)
  const bAbs = Math.sqrt(b.x ** 2 + b.y ** 2)

  const cosValue = mult / (aAbs * bAbs)

  let sign = 1
  if (withSign) sign = a.y < 0 || b.y < 0 ? 1 : -1

  return sign * Math.acos(cosValue)
}
