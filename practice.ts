// This contains my attempts to solve previous completed problems again.

// Write a function: twoSum
// takes in an array of integers and an integer(target).
// return an array of two integers from the original array. of which the addition equals to the target.
// twoSum([2,7,11,15], 9) ===>> [0,1]
// twoSum([3,2,4], 6) ===>> [1,2]
// twoSum([3,3], 6) ===>> [0,1]

function twoSum(arr: number[], target: number) {
  const result: number[] = []
  // iterate through the array.
  for (let i = 0; i < arr.length; i++) {
    // run each number in the array against every other number in the array.
    for (let j = 0; j < arr.length; j++) {
      // check for match. a + b = target.
      if (arr[i] + arr[j] === target && j !== i) {
        return [i, j]
      }
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([3, 3], 6))

// Write a function: lengthOfLongestSubString
// takes in a string.
// returns the length of the longest substring without repeating character
// lengthOfLongestSubString('abcabcbb') ===>> 3
// lengthOfLongestSubString('bbbbb') ===>> 1
// lengthOfLongestSubString('pwwkew') ===>> 3

// function lengthOfLongestSubString(s: string) {
//   let current = ''
//   let longest = 0

//   for (let i = 0; i < s.length; i++) {
//     if (!current.includes(s[i])) {
//       current += s[i]
//     } else {
//       const index = current.indexOf(s[i])
//       current = current.slice(index + 1) + s[i]
//     }
//     console.log('current:', current)

//     longest = Math.max(longest, current.length)
//   }

//   return longest
// }

function lengthOfLongestSubString(str: string): number {
  if (str.length < 2) return str.length

  let longest = 0

  let current = ''

  for (let i = 0; i < str.length; i++) {
    if (!current.includes(str[i])) {
      current += str[i]
    } else {
      const index = current.indexOf(str[i])
      current = current.slice(index + 1) + str[i]
      console.log(current)
    }

    longest = Math.max(longest, current.length)
  }

  return longest
}

// console.log(lengthOfLongestSubString('abcabcbb'))
// console.log(lengthOfLongestSubString('bbbbb'))
// console.log(lengthOfLongestSubString('pwwkew'))
// console.log(lengthOfLongestSubString('au'))
// console.log(lengthOfLongestSubString('dvdf'))

// Given a roman numeral, convert it to an integer.
const roman_To_Int = function (s: string) {
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

  for (let i = 0; i < s.length; ++i) {
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

// console.log(roman_To_Int('III'))
// console.log(roman_To_Int('LVIII'))
// console.log(roman_To_Int('MCMXCIV'))

// Write a function to find the longest common prefix string amongst an array of strings.
// fn getCommon
// takes in an array of strings.empty array? would it always contain strings?
// returns the longest common prefix with al the strings in the array.

const get_Common = function (arr: string[]) {
  arr = arr.sort((a, b) => a.length - b.length)

  const firStr = arr[0]
  const lastStr = arr[arr.length - 1]

  let result = ''

  for (let i = 0; i < lastStr.length; i++) {
    if (firStr[i] === lastStr[i]) {
      result += firStr[i]
    } else {
      break
    }
  }

  return result
}

// console.log(get_Common(['flower', 'flow', 'flight']))
// console.log(get_Common(['dog', 'racecar', 'car']))

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// fn isValid
// takes in a string of bracket characters

const is_Valid = function (str: string): boolean {
  // create a stack
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  const stack = []

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      if (stack[stack.length - 1] === map[char]) {
        stack.pop()
      }
    }
  }

  return stack.length === 0
}

console.log(is_Valid('()'))
console.log(is_Valid('()[]{}'))
console.log(is_Valid('(]'))
console.log(is_Valid('([])'))
