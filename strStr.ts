// fn strStr
// takes in two strings. the haystack and the needle to be found
// return the first index of needle in haystack

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

console.log(strStr('sadbutsad', 'sad'), 0)
console.log(strStr('leetcode', 'leeto'), -1)
