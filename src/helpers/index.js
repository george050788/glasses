import { Timestamp } from "firebase/firestore"

export const calculator = (arr) => {
  if (arr?.length === 0)
    return 0
  const total = arr?.reduce((acc, val) => acc + val, 0)
  console.log('total:', total)
  return total.toFixed(2)
}

export const displayDate = (timestamp) => {
  const date = new Date(timestamp)

  const monthNames = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${monthNames[monthIndex]}${day}, ${year}`



}

