//Write a function called binarySearch which accepts a sorted> array and a value and returns the index at which the value exists. Otherwise, return -1.

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const value = 5

const binarySearch = (arr: Array<number>, element: number): number => {
  let start = 0
  let end = arr.length
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== element && start <= end) {
    if (element < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }

  return arr[middle] === element ? middle : -1
}

binarySearch(sortedArray, value)
