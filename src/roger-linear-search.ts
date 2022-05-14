const linearSearch = (array: Array<number>, value: number) =>
  array.map((el) => el === value) ? array.indexOf(value) : -1

console.log(linearSearch([1, 2, 3], 3)) //returns 2

console.log(linearSearch([1, 2, 3], 5)) //returns -1