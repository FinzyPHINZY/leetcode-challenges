// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

const searchRange = function (nums: number[], target: number): number[] {
  const result = [-1, -1]
  //   write 2 binary searches one for first, second for last
  const getFirst = (nums: number[], target: number) => {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
      const m = Math.floor((l + r) / 2)

      if (nums[m] === target) {
        if (m === 0 || nums[m - 1] !== target) {
          return m
        } else {
          r = m - 1
        }
      } else if (nums[m] < target) {
        l = m + 1
      } else {
        r = m - 1
      }
    }

    return -1
  }

  const getLast = function (nums: number[], target: number) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
      const m = Math.floor((left + right) / 2)

      if (nums[m] === target) {
        if (m === nums.length - 1 || nums[m + 1] !== target) {
          return m
        } else {
          left = m + 1
        }
      } else if (nums[m] < target) {
        left = m + 1
      } else {
        right = m - 1
      }
    }

    return -1
  }

  result[0] = getFirst(nums, target)
  result[1] = getLast(nums, target)

  return result
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4])
console.log(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1])
console.log(searchRange([], 0), [-1, -1])
console.log(searchRange([1], 1), [0, 0])
