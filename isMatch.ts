function isMatch(s: string, p: string): boolean {
  const m = s.length
  const n = p.length

  // Create a DP table with (m + 1) rows and (n + 1) columns
  const dp: boolean[][] = Array(m + 1)
    .fill(false)
    .map(() => Array(n + 1).fill(false))

  // Base case: empty string and empty pattern match
  dp[0][0] = true

  // Initialize the DP table for the case where the string is empty but the pattern isn't.
  // This deals with cases like s = "", p = "a*", which should be true.
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        // Current characters match, or pattern has a dot
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        // '*' case, check zero or more occurrences of the previous character
        dp[i][j] = dp[i][j - 2] // Treat '*' as zero occurrences
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j] // Treat '*' as one or more occurrences
        }
      }
    }
  }

  // The result is in the last cell
  return dp[m][n]
}

// function isMatch(s: string, p: string): boolean {
//   // Convert the pattern `p` into a valid regular expression
//   const regex = new RegExp(`^${p}$`)

//   // Test the string `s` against the regular expression
//   return regex.test(s)
// }

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', '*'))
console.log(isMatch('ab', '.*'))
