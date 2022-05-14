const array = [1, 2, 3, 3, 4, 5, 6, 6, 6, 9]

const countUniqueValues = (arr: Array<number>) => {
  arr.length === 0
    ? false
    : () => {
        const uniqueSet = new Set(arr)
        const uniqueValues = [...uniqueSet]
        return uniqueValues
      }
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99])
