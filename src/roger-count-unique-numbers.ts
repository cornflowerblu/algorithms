const array = [1, 2, 3, 3, 4, 5, 6, 6, 6, 9]

const countUniqueValues = (arr: Array<number>) => {
  if (arr.length === 0) return

  const uniqueCount = new Set(arr).size

  return uniqueCount
}
