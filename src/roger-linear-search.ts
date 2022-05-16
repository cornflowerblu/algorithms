//Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

const linearSearch = (arr: Array<number>, value: number): number =>
  arr ? arr.indexOf(value) : -1

console.log(linearSearch([1, 2, 3], 3)) //returns 2

console.log(linearSearch([1, 2, 3], 5)) //returns -1
