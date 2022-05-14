//Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not. Consider this array and the target sums:

const sumArray = [5, 7, 1, 2, 8, 4, 3]
const targetSum1 = 10
const targetSum2 = 19

const determineSum = (array: Array<number>, target: number): boolean => {
  const right = array.pop()

  if (!right) return false

  for (let i = 0; i < array.length; i++) {
    const result = array[i] + right
    if (result === target) {
      console.log(`${array[i]} + ${right} = ${target}`)
      return true
    }
  }
  console.log('no target sum found...')
  return false
}

determineSum(sumArray, targetSum1)
