import { longString1, longString2 } from './constants/long-strings'

const sort = async (x: Array<string>, y: Array<string>) => {
  x.sort(), y.sort()
}

async function rogerValidAnagram(
  firstString: string,
  secondString: string
): Promise<boolean> {
  const start = performance.now()

  if (firstString.length !== secondString.length) {
    console.log('Strings are not the same length... aborting.')
    return false
  }

  const arr1 = Array.from(firstString)
  const arr2 = Array.from(secondString)

  const output = arr2.filter((el) => {
    return arr1.indexOf(el) !== -1
  })

  await sort(output, arr1)

  if (output.toString() === arr1.toString()) {
    console.log('match found')
    const end = performance.now()
    console.log(`Started at: ${start} and ended at: ${end}`)
    return true
  }

  console.log('no match')
  const end = performance.now()
  console.log(`Started at: ${start} and ended at: ${end}`)
  return false
}

rogerValidAnagram(longString1, longString2)
