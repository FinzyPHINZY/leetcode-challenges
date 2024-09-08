// Given a string s, find the length of the longest
// substring
// without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(str: string): number {
  if (str.length < 2) return str.length

  let longest: number = 0
  let current: string = ''

  for (let i = 0; i < str.length; i++) {
    if (!current.includes(str[i])) {
      current += str[i]
    } else {
      const index = current.indexOf(str[i])
      current = current.slice(index + 1) + str[i]
    }
    longest = Math.max(longest, current.length)
  }

  return longest
}

console.log(lengthOfLongestSubstring('abcabcbb'), 3)
console.log(lengthOfLongestSubstring('bbbbb'), 1)
console.log(lengthOfLongestSubstring('pwwkew'), 3)
console.log(lengthOfLongestSubstring(''), 0)
console.log(lengthOfLongestSubstring('dvdf'), 3)
console.log(lengthOfLongestSubstring('au'), 2)
