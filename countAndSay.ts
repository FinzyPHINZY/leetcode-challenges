function countAndSay(n: number): string {
  let result = '1'

  for (let i = 1; i < n; i++) {
    result = nextSequence(result)
  }

  return result
}

function nextSequence(s: string): string {
  let result = ''
  let count = 1

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      count++
    } else {
      result += count.toString() + s[i]
      count = 1
    }
  }

  return result
}

console.log(countAndSay(7)) // Output: "1211"
