const countDownToOne = (num: number) => {
  if (num <= 0) {
    console.log('All done!')
    return
  }

  console.log(num)
  num--
  countDownToOne(num)
}

const sumRange = (num: number): number =>
  num === 1 ? 1 : num + sumRange(num - 1)

const factorial = (num: number): number =>
  num === 0 ? 1 : num * factorial(num - 1)
