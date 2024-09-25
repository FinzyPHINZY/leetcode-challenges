// fn searchInsert
// takes in an array of disting integers
// return the index of the target if found. else return the index it would be

// const searchInsert = function (
//   nums: number[],
//   target: number
// ): number | undefined {
//   const index = nums.indexOf(target)

//   if (index >= 0) {
//     return index
//   }
// }

function searchInsert(nums: Array<number>, target: number) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  nums.splice(left, 0, target)
  return left
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([3, 6, 7, 8, 10], 5))
