export const ticksToTimer = (ticks: number): Timer => {
  return {
    hours: Math.floor(ticks / 1000 / 60 / 60),
    minutes: Math.floor(ticks / 1000 / 60) % 60,
    seconds: Math.floor(ticks / 1000) % 60,
    milliseconds: ticks % 1000,
    ticks,
  }
}

export const ticksToString = (ticks: number) => {
  let str = ''
  const timer = ticksToTimer(ticks)

  timer.hours && (str += `${timer.hours}ч`)
  timer.minutes && (str += ` ${timer.minutes}м`)
  timer.seconds && (str += ` ${timer.seconds}с`)
  timer.milliseconds && (str += ` ${timer.milliseconds}мс`)

  return str
}
