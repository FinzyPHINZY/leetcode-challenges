// write a function 'reverse'
// take in a number as a parameter. would there be a floating number? would there be a string? is there anychance that the number could be negative in some test cases? yes.
// return the number with it's digits reversed.
// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21

;[-231, 231 - 1]

function reverse(x: number): number {
  // convert the number parameter to a string
  // split it into an array of digits and call the reverse and join function.
  const value = x
    .toString()
    .split('')
    .filter((char) => char !== '-')
    .reverse()
    .join('')
  // check if the number is negative. if it is, append the - sign to it and return the number

  const reversed = x < 0 ? parseInt('-' + value) : parseInt(value)

  return reversed < -(2 ** 31) || reversed > 2 ** 31 - 1 ? 0 : reversed
}

console.log(reverse(123), 321)
console.log(reverse(-123), -321)
console.log(reverse(120), 21)
