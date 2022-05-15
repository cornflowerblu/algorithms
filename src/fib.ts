const fib = (num: number): number =>
  num <= 2 ? 1 : fib(num - 1) + fib(num - 2)
