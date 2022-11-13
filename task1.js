const someArr = [0, 4, 8, 15, -16, 23, 42, '+', '', null, undefined, true, {key: 'value'}, 0, NaN]
function showArrInfo(arr) {
  const arrNumbers = arr.filter(item => typeof item === 'number' && !isNaN(item))
  let countEven = 0
  let countOdd = 0
  let countZero = 0
  for (const item of arrNumbers) {
    if (item === 0) {
      countZero++
    } else if (item % 2 === 1) {
      countOdd++
    } else countEven++
  }

  console.log(`Массив содержит ${countEven} четных и ${countOdd} нечетных элемента. Значений, равных 0: ${countZero} шт.`)
}

showArrInfo(someArr)