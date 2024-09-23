// fn longestCommonPrefix
// the function accepts an array of strings as its argument.
// returns the longest common prefix string in the array.
// longestCommonPrefix(['flower', 'flow', 'flop', flown]) ===> 'flo'
// longestCommonPrefix(['dog', 'cat', 'race]) ===> ''

// const longestCommonPrefix = function (arr: string[]): string {
//   if (arr.length === 0) return ''
//   let prefix = ''

//   for (let i = 0; i < arr[0].length; i++) {
//     const char = arr[0][i]
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] !== char) {
//         return prefix
//       }
//     }

//     prefix += char
//   }

//   return prefix
// }

const longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return ''

  let prefix = ''
  strs = strs.sort()
  const first = strs[0]
  const last = strs[strs.length - 1]

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i]
    } else {
      break
    }
  }

  return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
