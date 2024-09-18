// takes in a number. positive or negative. always an integer
// returns a boolean depending on whether the number is a palindrome or not
// isPalindrome(121) === true
// isPalindrome(-121) === false
// isPalindrome(10) === false

const isPalindrome = function (x: number): boolean {
  // reverse the number
  const reversed = x.toString().split('').reverse().join('')

  // compare the reversedNum to x
  return x === Number(reversed)
}

// const isPalindrome = function (x: number): boolean {
//   let value = x.toString()

//   let reversed = []
//   for (let i = value.length - 1; i >= 0; i--) {
//     reversed.push(value[i])
//   }

//   console.log(reversed)

//   return Number(reversed.join('')) === x
// }

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(11))
