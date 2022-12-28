export const currentTime = (band: boolean = false): number | string => {
  if (band) return new Date().getTime().toString()
  return new Date().getTime()
}
