// fn combinationSum
// takes in candidates (integer array) and target (integer)
// it returns an array of nested arrays containing the various combinations that sum up to target

const combinationSum = function (
  candidates: number[],
  target: number
): number[][] {
  const results: number[][] = []

  const backtrack = (
    remainingTarget: number,
    currentCombination: number[],
    start: number
  ) => {
    if (remainingTarget === 0) {
      results.push([...currentCombination])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      let num = candidates[i]

      if (num > remainingTarget) {
        continue
      }

      currentCombination.push(num)

      backtrack(remainingTarget - num, currentCombination, i)

      currentCombination.pop()
    }
  }

  backtrack(target, [], 0)

  return results
}

// Example usage:
const candidates = [2, 3, 6, 7]
const target = 7
console.log(combinationSum(candidates, target)) // [[2, 2, 3], [7]]

console.log(combinationSum([2, 3, 6, 7], 7))
