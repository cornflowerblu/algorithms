//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr: Array<number>): number =>
  arr.length === 0 ? 0 : arr.reduce((prev, current) => prev * current)
