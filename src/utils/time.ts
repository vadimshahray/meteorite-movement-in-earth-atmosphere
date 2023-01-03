export const ticksToTimer = (ticks: number): Time => {
  return {
    hours: Math.floor(ticks / 1000 / 60 / 60),
    minutes: Math.floor(ticks / 1000 / 60) % 60,
    seconds: Math.floor(ticks / 1000) % 60,
    milliseconds: Math.floor(ticks) % 1000,
    ticks,
  }
}

export const ticksToString = (ticks: number, timeCoefficient: number = 1) => {
  const timer = ticksToTimer(ticks * timeCoefficient)
  return timerToString(timer)
}

export const timerToString = (timer: Time) => {
  let str = ''

  timer.hours && (str += `${timer.hours}ч`)
  timer.minutes && (str += ` ${timer.minutes}м`)
  timer.seconds && (str += ` ${timer.seconds}с`)
  timer.milliseconds && (str += ` ${timer.milliseconds}мс`)

  return str === '' ? '0мс' : str
}
