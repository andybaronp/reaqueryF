export const sleep = (secods: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, secods * 1000)
  })
}
