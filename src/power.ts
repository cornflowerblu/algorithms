//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()

const power = (base: number, exponent: number): number =>
  exponent === 0 ? 1 : base * power(base, exponent - 1)
