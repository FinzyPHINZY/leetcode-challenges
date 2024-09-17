function myAtoi(s: string): number {
  // Step 1: Trim whitespace
  s = s.trim()

  if (s.length === 0) return 0

  // Step 2: Check for optional sign
  let sign = 1 // default is positive
  let index = 0

  if (s[0] === '-') {
    sign = -1
    index++
  } else if (s[0] === '+') {
    index++
  }

  // Step 3: Parse the number
  let result = 0
  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = -(2 ** 31)

  while (index < s.length && s[index] >= '0' && s[index] <= '9') {
    result = result * 10 + (s[index].charCodeAt(0) - '0'.charCodeAt(0))

    // Step 4: Handle overflow
    if (sign * result >= INT_MAX) return INT_MAX
    if (sign * result <= INT_MIN) return INT_MIN

    index++
  }

  return sign * result
}

const test = ['42', ' -42', '1337c0d3', '0-1', 'words and 987', '-91283472332']

test.forEach((value) => console.log(myAtoi(value)))
