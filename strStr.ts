// fn strStr
// takes in two strings. the haystack and the needle to be found
// return the first index of needle in haystack

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

console.log(strStr('sadbutsad', 'sad'), 0)
console.log(strStr('leetcode', 'leeto'), -1)

// grades = 0 <= n >=100
// fail = n < 40

// If the difference between the grade and the next multiple of 5 is less than 3 , round up to the next multiple of 5
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
