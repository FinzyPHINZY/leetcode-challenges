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
