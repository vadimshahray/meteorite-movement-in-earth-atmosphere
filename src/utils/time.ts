export const ticksToTime = (ticks: number): Time => {
  return {
    hours: Math.floor(ticks / 1000 / 60 / 60),
    minutes: Math.floor(ticks / 1000 / 60) % 60,
    seconds: Math.floor(ticks / 1000) % 60,
    milliseconds: Math.floor(ticks) % 1000,
    ticks,
  }
}

export const ticksToString = (ticks: number, timeCoefficient: number = 1) => {
  const time = ticksToTime(ticks * timeCoefficient)
  return timeToString(time)
}

export const timeToString = (time: Time) => {
  let str = ''

  time.hours && (str += `${time.hours}ч`)
  time.minutes && (str += ` ${time.minutes}м`)
  time.seconds && (str += ` ${time.seconds}с`)
  time.milliseconds && (str += ` ${time.milliseconds}мс`)

  return str === '' ? '0мс' : str
}
