import { longString1, longString2 } from './constants/long-strings'

const isAnagram = (str1: string, str2: string): boolean => {
  const start = performance.now()
  let counterDict: { [id: string]: number } = {}
  for (let char of str1) {
    counterDict[char] = (counterDict[char] ?? 0) + 1
  }
  for (let char of str2) {
    counterDict[char] = (counterDict[char] ?? 0) - 1
  }
  for (let key in counterDict) {
    if (counterDict[key] !== 0) {
      console.log('no match')
      const end = performance.now()
      console.log(`Started at: ${start} and ended at: ${end}`)
      return false
    }
  }
  console.log('match found')
  const end = performance.now()
  console.log(`Started at: ${start} and ended at: ${end}`)
  return true
}

isAnagram(longString1, longString2)
