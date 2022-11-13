const raiseNumberToPower = (num, pow) => {
  if (pow < 1 || pow !== +pow.toFixed()) {
    console.error('натуральные числа')
    return
  }

  let res = num
  while (pow > 1) {
    res *= num
    pow--
  }
  return res
}

console.log(raiseNumberToPower(2, 8))
console.log(raiseNumberToPower(-2, 3))
console.log(raiseNumberToPower(2, 1))
console.log(raiseNumberToPower(-2, 1.3))
console.log(raiseNumberToPower(2, 0))


//
const putNumberToPower = (num, pow) => num ** pow
const example = putNumberToPower(5, 3)
console.log(example)