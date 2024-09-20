const romanToInt = function (s: string): number {
  // initialize a list containing the stuff and values
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    const currentVal = map[s[i]]
    const nextVal = map[s[i + 1]]

    if (currentVal < nextVal) {
      result -= currentVal
    } else {
      result += currentVal
    }
  }

  return result
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))

// : { [key: string]: number }
