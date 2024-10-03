function climbStairs(n: number): number {
  if (n === 1) return 1
  if (n === 2) return 2

  let prev2 = 1
  let prev1 = 2

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  }

  return prev1
}

console.log(climbStairs(2)) // Output: 2
console.log(climbStairs(3)) // Output: 3
console.log(climbStairs(5)) // Output: 8
